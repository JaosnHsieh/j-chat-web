import React, { Component } from "react";
import TabButton from "../TabButton";
import "./style.css";
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
        <TabButton url={"/contacts"}>Contacts</TabButton>
        <TabButton url={"/groups"}>Groups</TabButton>
        {/* <TabButton url={"/Profile"}>Profile</TabButton> */}
      </div>
    );
  }
}

export default Sidebar;
