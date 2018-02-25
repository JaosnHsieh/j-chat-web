import React from "react";
import { withRouter, Link } from "react-router-dom";

const AuthButton = withRouter(
  ({ history, isAuthenticated, onLogout, currentUser }) =>
    isAuthenticated ? (
      <p className="logined">
        Hi, {currentUser && currentUser.username}
        <button
          onClick={() => {
            onLogout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>
        You are not logged in. <Link to="/signup"> Sign Up </Link>{" "}
        <Link to="/login"> Login </Link>
      </p>
    )
);

export default AuthButton;
