import React, { Component } from "react";
import TabButton from "../TabButton";

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
        {/* <TabButton url={"/Chat"}>Chat</TabButton>
        <TabButton url={"/Profile"}>Profile</TabButton> */}
      </div>
    );
  }
}

export default Sidebar;
