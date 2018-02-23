import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "../Login";
import Protected from "../Protected";
import PrivateRoute from "../PrivateRoute";
import AuthButton from "../AuthButton";

class App extends Component {
  render() {
    return (
      <div>
        <AuthButton />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Protected} />
        </Switch>
      </div>
    );
  }
}

export default App;
