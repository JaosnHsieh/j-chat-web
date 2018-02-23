import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onSubmit = async (e, onLogined) => {
    e.preventDefault();
    onLogined({ ...this.state });
  };
  usernameOnChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  passwordOnChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  render() {
    const { onLogined, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <form
          onSubmit={e => {
            this.onSubmit(e, onLogined);
          }}
        >
          <input
            value={this.state.username}
            onChange={this.usernameOnChange}
            type="text"
          />
          <input
            value={this.state.password}
            onChange={this.passwordOnChange}
            type="password"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Login;
