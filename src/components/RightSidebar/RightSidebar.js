import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "../Chat";
import GroupController from "../GroupController";
import CreateGroup from "../CreateGroup";

const HOC = (inputProps, Component) => {
  return ({ ...routeProps }) => <Component {...inputProps} {...routeProps} />;
};

class RightSidebar extends Component {
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
          <Route
            path="/contacts/:chatType/:id"
            component={HOC(this.props, Chat)}
          />
          <Route
            path="/groups/:id"
            component={HOC(this.props, GroupController)}
          />
          <Route
            exact
            path="/creategroup"
            component={HOC(this.props, CreateGroup)}
          />
        </Switch>
      </div>
    );
  }
}

export default RightSidebar;
