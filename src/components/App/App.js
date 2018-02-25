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
let rawMessages = [];
class App extends Component {
  state = {
    isAuthenticated: false,
    userList: [],
    groupList: [],
    messages: []
  };
  async componentDidMount() {
    this.checkIfAlreadyLogined();
  }
  getUserInitData = async () => {
    const [{ data: users }, { data: messages }] = await Promise.all([
      axios.get("/user"),
      axios.get("/message/user")
    ]);
    rawMessages = messages;
    this.setState({
      userList: users.map(user => {
        user.avatar = `https://placem.at/people?w=100`;
        return user;
      }),
      messages: this.formatMessages(rawMessages)
    });
  };
  formatMessages = messages =>
    messages.reduce((result, ele) => {
      let creatorId = ele.ChatMessage.creatorId;
      return {
        ...result,
        [creatorId]: result[`${creatorId}`]
          ? [...result[creatorId], ele.ChatMessage]
          : [ele.ChatMessage]
      };
    }, {});
  checkIfAlreadyLogined = async () => {
    try {
      await axios.get("/login");
      this.updateLoginState(true);
    } catch (err) {
      console.log(err);
    }
  };
  updateLoginState = boo => {
    this.setState({
      isAuthenticated: boo
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
      rawMessages.push(data);
      this.setState({
        messages: this.formatMessages(rawMessages)
      });
    });
  };
  sendViaWebsocket = (idno, msg) => {
    socket.emit("toSomeone", idno, msg);
  };
  onLogined = async ({ username, password }) => {
    try {
      await axios.post("/login", {
        username,
        password
      });
      this.updateLoginState(true);
    } catch (err) {
      console.log(err);
    }
  };
  onLogout = async cb => {
    try {
      await axios.post("/logout");
      this.updateLoginState(false);
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
    const { userList, messages } = this.state;
    return (
      <div>
        <AuthButton
          isAuthenticated={this.state.isAuthenticated}
          onLogout={this.onLogout}
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
          />
        </Switch>
      </div>
    );
  }
}

export default App;
