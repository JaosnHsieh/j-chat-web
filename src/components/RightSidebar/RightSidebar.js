import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "../Chat";

const HOC = (inputProps, Component) => {
  return ({ ...routeProps }) => <Component {...inputProps} {...routeProps} />;
};

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
          <Route path="/Contacts/:id" component={HOC(this.props, Chat)} />
        </Switch>
      </div>
    );
  }
}

export default Middlebar;
