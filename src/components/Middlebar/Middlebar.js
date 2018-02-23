import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Contacts from "../Contacts";
import Chat from "../Chat";
import Profile from "../Profile";
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
          <Route path="/Contacts" component={Contacts} />
          <Route path="/Chat" component={Chat} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default Middlebar;
