import React, { Component } from "react";
import "./style.css";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      people: {}
    };
  }
  onSubmit = (userId, chatType) => {
    const { input } = this.state;
    this.props.sendViaWebsocket(userId, input, chatType);
    this.setState({
      input: ""
    });
  };
  onInputChange = event => {
    const input = event.target.value;
    this.setState({
      input
    });
  };

  render() {
    const {
      match,
      messages,
      userList,
      groupMessages,
      currentUser
    } = this.props;
    const id = match && match.params && match.params.id; // cloud be user.id or group.id depends on route
    const chatType = match && match.params && match.params.chatType;
    const showingMessages = chatType === "user" ? messages : groupMessages; // user or group
    const { input } = this.state;
    const userListMap = userList.reduce((result, ele) => {
      return {
        ...result,
        [ele.idno]: { ...ele }
      };
    }, {});
    const dateStringToshow = [];
    return (
      <div className={`chat-div`}>
        {showingMessages[id] &&
          showingMessages[id].map((msg, index) => {
            const dateObj = new Date(msg.createdAt);
            const dateString = dateObj.toLocaleDateString();
            const timeString = dateObj.toLocaleTimeString();
            const lastDateString =
              dateStringToshow[dateStringToshow.length - 1];
            if (dateStringToshow[dateStringToshow.length - 1] !== dateString) {
              dateStringToshow.push(dateString);
            }
            return (
              <div
                className={
                  msg.creatorId === parseInt(currentUser.idno, 10)
                    ? "myname"
                    : "name"
                }
                key={index}
              >
                {dateString !== lastDateString ? <h3>{dateString}</h3> : ""}
                <span>{timeString}</span>
                <span>{userListMap[msg && msg.creatorId].username} : </span>
                {msg.messageBody}
              </div>
            );
          })}
        <div className={`lines`} />
        <div className={`chat-input`}>
          <form
            onSubmit={event => {
              this.onSubmit(id, chatType);
              event.preventDefault();
            }}
          >
            <input
              value={this.state.input}
              onChange={this.onInputChange}
              type="text"
              ref={node => {
                if (node) {
                  node.focus();
                }
              }}
              required
            />
            <button
              type="button"
              onClick={event => {
                this.onSubmit(id, chatType);
                event.preventDefault();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
