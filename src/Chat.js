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
    this.addInputToLines(userId);
  };
  addInputToLines = userId => {
    const { people } = this.state;
    const userLines = this.state.people[userId] || [];
    const updatedLines = [...userLines, this.state.input];
    this.setState({
      people: {
        ...people,
        [userId]: updatedLines
      },
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
    const { match } = this.props;
    const userId = match && match.params && match.params.id;
    const { people } = this.state;
    const lines = (people && people[userId]) || [];
    return (
      <div className={`chat-container`}>
        <div className={`lines`}>
          chat to {userId}
          {lines.map((line, i) => <h3 key={i}>{line}</h3>)}
        </div>
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
            />
            <button type="button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
