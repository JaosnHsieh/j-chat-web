import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  componentDidMount() {
    this.input.focus();
  }
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
    console.log("rendering");
    const { onLogined, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to={"/contacts"} />;
    }

    return (
      <div className="login-page">
        <form
          onSubmit={e => {
            this.onSubmit(e, onLogined);
          }}
        >
          <div>
            <input
              placeholder="username"
              className="input"
              value={this.state.username}
              onChange={this.usernameOnChange}
              type="text"
              ref={input => {
                this.input = input;
              }}
              pattern=".{4,}"
              title="4 characters minimum"
              required
            />
          </div>
          <div>
            {" "}
            <input
              placeholder="password"
              className="input"
              value={this.state.password}
              onChange={this.passwordOnChange}
              type="password"
              pattern=".{4,}"
              title="4 characters minimum"
              required
            />
          </div>
          <input className="submit-btn" type="submit" value="Login" />
          <p className="message">
            Not registered?
            <Link className="center" to="/signup">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
export default Login;
