import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Contacts from "../Contacts";
// import Chat from "../Chat";
// import Profile from "../Profile";

const HOC = (inputProps, Component) => {
  return ({ ...routeProps }) => <Component {...inputProps} {...routeProps} />;
};
class Middlebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "firstOne"
    };
  }
  render() {
    return (
      <div className="middlebar">
        <Switch>
          <Route
            path="/contacts"
            component={HOC({ ...this.props }, Contacts)}
          />
          {/* <Route
            path="/Chat"
            component={HOC({ messages, userList }, Chat, "Chat")}
          />
          <Route path="/Profile" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
}

export default Middlebar;
