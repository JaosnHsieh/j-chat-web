import React from "react";
import axios from "../../libs/axios.js";
import { Redirect } from "react-router-dom";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: ""
    };
  }
  onUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  onSubmit = onSingupComplete => {
    return async e => {
      e.preventDefault();
      try {
        await axios.post("/user", { ...this.state });
        onSingupComplete();
      } catch (err) {
        console.log("err", err);
      }
    };
  };
  render() {
    const { onSingupComplete, isAuthenticated } = this.props;
    return isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <div>
        <form onSubmit={this.onSubmit(onSingupComplete)}>
          <div>
            <label>
              username
              <input
                type="text"
                value={this.state.username}
                onChange={this.onUsernameChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </label>
          </div>
          <div>
            <label>
              Name
              <input
                type="text"
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </label>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
