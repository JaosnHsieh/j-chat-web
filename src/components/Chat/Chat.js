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
    const { people, input } = this.state;
    const lines = (people && people[userId]) || [];
    const userListMap = userList.reduce((result, ele) => {
      return {
        ...result,
        [ele.idno]: { ...ele }
      };
    }, {});
    console.log("messages", messages);
    console.log("userList...", userList);
    console.log("userListMap", userListMap);
    // console.log("addCurrentUserMessage", addCurrentUserMessage);
    return (
      <div className={`chat-container`}>
        {messages[userId] &&
          messages[userId].map((msg, index) => (
            <div
              className={msg.creatorId == userId ? "name" : "myname"}
              key={index}
            >
              <span>{userListMap[msg && msg.creatorId].username} : </span>
              {msg.messageBody}
            </div>
          ))}
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
            <button type="button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
