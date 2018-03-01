import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Contacts from "../Contacts";
import Groups from "../Groups";
import Chat from "../Chat";
import GroupController from "../GroupController";
import CreateGroup from "../CreateGroup";

import "./style.css";

const HOC = (inputProps, Component) => {
  return ({ ...routeProps }) => <Component {...inputProps} {...routeProps} />;
};
class Middlebar extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   activeTab: "firstOne"
    // };
  }
  render() {
    return (
      <div className="middlebar-div">
        <Switch>
          <Route
            exact
            path="/contacts"
            component={HOC({ ...this.props }, Contacts)}
          />
          <Route
            exact
            path="/groups"
            component={HOC({ ...this.props }, Groups)}
          />

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

export default Middlebar;
