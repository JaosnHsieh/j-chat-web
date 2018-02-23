import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "../Login";
import Protected from "../Protected";
import PrivateRoute from "../PrivateRoute";
import Signup from "../Signup";
import AuthButton from "../AuthButton";
import axios from "../../libs/axios.js";

class App extends Component {
  state = {
    isAuthenticated: false
  };
  async componentDidMount() {
    try {
      await axios.get("/login");
      this.setState({
        isAuthenticated: true
      });
    } catch (err) {}
  }
  onLogined = async ({ username, password }) => {
    try {
      await axios.post("/login", {
        username,
        password
      });
      this.setState({
        isAuthenticated: true
      });
    } catch (err) {
      console.log(err);
    }
  };
  onLogout = async cb => {
    try {
      await axios.post("/logout");
      this.setState({
        isAuthenticated: false
      });
    } catch (err) {
      console.log(err);
    }
    cb();
  };
  onSingupComplete = () => {
    this.setState({
      isAuthenticated: true
    });
  };
  render() {
    return (
      <div>
        <AuthButton
          isAuthenticated={this.state.isAuthenticated}
          onLogout={this.onLogout}
        />
        <Switch>
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                isAuthenticated={this.state.isAuthenticated}
                onLogined={this.onLogined}
              />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <Signup
                {...props}
                isAuthenticated={this.state.isAuthenticated}
                onSingupComplete={this.onSingupComplete}
              />
            )}
          />
          <PrivateRoute
            path="/"
            component={Protected}
            isAuthenticated={this.state.isAuthenticated}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
