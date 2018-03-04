import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Contacts from "../Contacts";
import Groups from "../Groups";
import Chat from "../Chat";
import GroupController from "../GroupController";
import CreateGroup from "../CreateGroup";

import "./style.css";

class Middlebar extends Component {
  render() {
    return (
      <div className="middlebar-div">
        <Switch>
          <Route
            exact
            path="/contacts"
            render={props => <Contacts {...this.props} {...props} />}
          />
          <Route
            exact
            path="/groups"
            render={props => <Groups {...this.props} {...props} />}
          />

          <Route
            path="/contacts/:chatType/:id"
            render={props => <Chat {...this.props} {...props} />}
          />
          <Route
            path="/groups/:id"
            render={props => <GroupController {...this.props} {...props} />}
          />
          <Route
            exact
            path="/creategroup"
            render={props => <CreateGroup {...this.props} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Middlebar;
