import React, { Component } from "react";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      people: {}
    };
  }
  onSubmit = userId => {
    const { input } = this.state;
    this.props.sendViaWebsocket(userId, input);
    this.setState({
      input: ""
    });
  };
  addInputToLines = userId => {
    // const { people } = this.state;
    // const userLines = this.state.people[userId] || [];
    // const updatedLines = [...userLines, this.state.input];
    // this.props.sendViaWebsocket(userId, this.state.input);
    // this.setState({
    //   people: {
    //     ...people,
    //     [userId]: updatedLines
    //   },
    //   input: ""
    // });
  };
  onInputChange = event => {
    const input = event.target.value;
    this.setState({
      input
    });
  };

  render() {
    const { match, messages, userList } = this.props;
    const userId = match && match.params && match.params.id;
    const { input } = this.state;
    const userListMap = userList.reduce((result, ele) => {
      return {
        ...result,
        [ele.idno]: { ...ele }
      };
    }, {});
    const dateStringToshow = [];
    // console.log("addCurrentUserMessage", addCurrentUserMessage);
    return (
      <div className={`chat-container`}>
        {messages[userId] &&
          messages[userId].map((msg, index) => {
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
                  msg.creatorId === parseInt(userId, 10) ? "name" : "myname"
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
              this.onSubmit(userId);
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
            />
            <button
              type="button"
              onClick={event => {
                this.onSubmit(userId);
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
