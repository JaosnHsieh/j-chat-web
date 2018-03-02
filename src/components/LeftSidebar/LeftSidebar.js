import React, { Component } from "react";
import TabButton from "../TabButton";
import "./style.css";
import chatIcon from "../../static/img/chat-icon.png";
import teamIcon from "../../static/img/team-icon.png";
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
        <TabButton url={"/contacts"}>
          <img className="icon" src={chatIcon} />
        </TabButton>
        <TabButton url={"/groups"}>
          <img className="icon" src={teamIcon} />
        </TabButton>
        {/* <TabButton url={"/Profile"}>Profile</TabButton> */}
      </div>
    );
  }
}

export default Sidebar;
