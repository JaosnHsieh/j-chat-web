import React, { Component } from "react";
import TabButton from "./TabButton.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Contacts from "./Contacts.js";
import Chat from "./Chat.js";
import Profile from "./Profile.js";
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
