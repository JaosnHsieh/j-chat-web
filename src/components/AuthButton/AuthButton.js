import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./style.css";
import logo from "../../static/img/jchat-logo.png";
const AuthButton = withRouter(
  ({ history, isAuthenticated, onLogout, currentUser }) =>
    isAuthenticated ? (
      <div className="auth-div">
        Hi, {currentUser && currentUser.username}
        <button
          onClick={() => {
            onLogout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </div>
    ) : (
      <div className="auth-div">
      <img src={logo}/>
        {/* <p className="center">You are not logged in.</p>{" "}
        <Link className="center" to="/signup">
          {" "}
          Sign Up{" "}
        </Link>{" "}
        <Link className="center" to="/login">
          {" "}
          Login{" "}
        </Link> */}
      </div>
    )
);

export default AuthButton;
