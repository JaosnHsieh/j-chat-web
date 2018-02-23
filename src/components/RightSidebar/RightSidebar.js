import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "../Chat";
class Middlebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "firstOne"
    };
  }
  render() {
    return (
      <div className="right-sidebar">
        <Switch>
          <Route path="/Contacts/:id" component={Chat} />
        </Switch>
      </div>
    );
  }
}

export default Middlebar;
