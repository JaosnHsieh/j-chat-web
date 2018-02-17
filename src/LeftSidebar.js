import React, { Component } from "react";
import TabButton from "./TabButton.js";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Contacts from "./Contacts.js";
// import Chat from "./Chat.js";
// import Profile from "./Profile.js";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "firstOne"
    };
  }
  render() {
    return (
      <div className="left-sidebar">
        <TabButton url={"/Contacts"}>Contacts</TabButton>
        <TabButton url={"/Chat"}>Chat</TabButton>
        <TabButton url={"/Profile"}>Profile</TabButton>
      </div>
    );
  }
}

export default Sidebar;
