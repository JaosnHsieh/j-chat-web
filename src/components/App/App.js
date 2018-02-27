import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "../Login";
import Protected from "../Protected";
import PrivateRoute from "../PrivateRoute";
import Signup from "../Signup";
import AuthButton from "../AuthButton";
import axios from "../../libs/axios.js";
import io from "socket.io-client";
let socket;
class App extends Component {
  state = {
    isAuthenticated: false,
    userList: [],
    groupList: [],
    myGroupList: [],
    messages: [],
    currentUser: null
  };
  async componentDidMount() {
    this.checkIfAlreadyLogined();
  }
  addOneGroup = group => {
    const { groupList } = this.state;
    this.setState({
      gruopList: [...groupList, group]
    });
  };
  addOneMyGroup = group => {
    const { myGroupList } = this.state;
    this.setState({
      myGroupList: [...myGroupList, group]
    });
  };
  removeOneMyGroup = leavedUserXGroup => {
    const removedMyGroupList = this.state.myGroupList.filter(ele => {
      return ele.idno === leavedUserXGroup.groupId ? false : true;
    });
    console.log("removedMyGroupList", removedMyGroupList);
    this.setState({
      myGroupList: removedMyGroupList
    });
  };
  addCurrentUserMessage = (userId, messageBody) => {
    const { messages, currentUser } = this.state;
    // console.log("messageBody", messageBody);
    // console.log("messages", messages);
    // console.log("userId", userId);
    const updatedMessages = {
      ...messages,
      [userId]: [
        ...messages[userId],
        {
          messageBody,
          creatorId: currentUser.idno,
          createdAt: new Date().toISOString()
        }
      ].sort(function(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      })
    };
    this.setState({
      messages: updatedMessages
    });
  };
  getUserInitData = async () => {
    const [
      { data: users },
      { data: messages },
      { data: groupList },
      { data: myGroupList }
    ] = await Promise.all([
      axios.get("/user"),
      axios.get("/message/user"),
      axios.get("/group"),
      axios.get("/mygroup")
    ]);
    this.setState({
      userList: users.map(user => {
        user.avatar = `https://placem.at/people?w=100`;
        return user;
      }),
      messages: messages,
      groupList,
      myGroupList
    });
  };
  // formatMessages = messages => {
  //   const { currentUser } = this.state;
  //   return messages.reduce((result, ele) => {
  //     const { senderId, recipientId } = ele;
  //     if (senderId === currentUser.idno) {
  //       return {
  //         ...result,
  //         [recipientId]: result[`${recipientId}`]
  //           ? [...result[recipientId], ele.ChatMessage]
  //           : [ele.ChatMessage]
  //       };
  //     }
  //     return {
  //       ...result,
  //       [senderId]: result[`${senderId}`]
  //         ? [...result[senderId], ele.ChatMessage]
  //         : [ele.ChatMessage]
  //     };
  //   }, {});
  // };
  checkIfAlreadyLogined = async () => {
    try {
      let { data: currentUser } = await axios.get("/login");
      this.updateLoginState(true, currentUser);
    } catch (err) {
      console.log(err);
    }
  };
  updateLoginState = (boo, currentUser) => {
    this.setState({
      isAuthenticated: boo,
      currentUser
    });
    if (boo) {
      this.listenToWebsocket();
      this.getUserInitData();
    } else {
      socket && socket.disconnect();
    }
  };
  listenToWebsocket = () => {
    socket = io("localhost:3030");
    socket.on("my message", data => {
      const { messages } = this.state;
      const updatedMessages = {
        ...messages,
        [data.senderId]: [...messages[data.senderId], data.ChatMessage]
      };
      this.setState({
        messages: updatedMessages
      });
    });
  };
  sendViaWebsocket = (idno, msg) => {
    socket.emit("toSomeone", idno, msg);
    this.addCurrentUserMessage(idno, msg);
  };
  onLogined = async ({ username, password }) => {
    try {
      const { data: currentUser } = await axios.post("/login", {
        username,
        password
      });
      this.updateLoginState(true, currentUser);
    } catch (err) {
      console.log(err);
    }
  };
  onLogout = async cb => {
    try {
      await axios.post("/logout");
      this.updateLoginState(false, null);
    } catch (err) {
      console.log(err);
    }
    cb();
  };
  onSingupComplete = () => {
    this.setState({
      isAuthenticated: true
    });
  };
  render() {
    const { userList, messages, isAuthenticated, currentUser } = this.state;
    return (
      <div>
        <AuthButton
          isAuthenticated={isAuthenticated}
          onLogout={this.onLogout}
          currentUser={currentUser}
        />
        <Switch>
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                isAuthenticated={this.state.isAuthenticated}
                onLogined={this.onLogined}
              />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <Signup
                {...props}
                isAuthenticated={this.state.isAuthenticated}
                onSingupComplete={this.onSingupComplete}
              />
            )}
          />
          <PrivateRoute
            path="/"
            component={Protected}
            isAuthenticated={this.state.isAuthenticated}
            userList={userList}
            messages={messages}
            sendViaWebsocket={this.sendViaWebsocket}
            currentUser={this.state.currentUser}
            groupList={this.state.groupList}
            myGroupList={this.state.myGroupList}
            addOneGroup={this.addOneGroup}
            addOneMyGroup={this.addOneMyGroup}
            removeOneMyGroup={this.removeOneMyGroup}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
