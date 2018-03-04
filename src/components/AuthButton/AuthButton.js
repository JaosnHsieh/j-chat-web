import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import logo from "../../static/img/jchat-logo.png";
const AuthButton = withRouter(
  ({ history, isAuthenticated, onLogout, currentUser }) =>
    isAuthenticated ? (
      <div className="auth-div logined">
        <div className="status-div center">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="name-div">
            Hi, {currentUser && currentUser.username}
            <button
              className="logout-btn"
              onClick={() => {
                onLogout(() => history.push("/"));
              }}
            >
              Logout
            </button>
            <p className="credit">
              All Icons made by{" "}
              <a href="https://www.flaticon.com/authors/freepik">Freepik</a>{" "}
              from www.flaticon.com
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div className="auth-div">
        <div className="img-container">
          <img src={logo} alt="logo" />
        </div>
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
