import React from "react";
import axios from "../../libs/axios.js";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: ""
    };
  }
  componentDidMount(){
    this.input.focus();
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
      <div className="signup-div">
        <form onSubmit={this.onSubmit(onSingupComplete)}>
          <div>
              <input
                placeholder="username"
                type="text"
                className="input"
                value={this.state.username}
                onChange={this.onUsernameChange}
                ref={(input)=>{ this.input = input;}}
              />
          </div>
          <div>
              <input
                placeholder="password"
                className="input"
                type="password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
          </div>
          <div>
              <input
                placeholder="name"
                className="input"
                type="text"
                value={this.state.name}
                onChange={this.onNameChange}
              />
          </div>
          <input className="submit-btn" type="submit" value="Signup"/>
          <p className="message">Already registerd? 
          <Link className="center" to="/login">
          Login
        </Link></p>
        </form>
      </div>
    );
  }
}

export default Signup;
