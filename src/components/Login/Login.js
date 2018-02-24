import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "jason1",
    password: "1234"
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
          <div>
            <label>
              username:
              <input
                value={this.state.username}
                onChange={this.usernameOnChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label>
              password:
              <input
                value={this.state.password}
                onChange={this.passwordOnChange}
                type="password"
              />
            </label>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Login;
