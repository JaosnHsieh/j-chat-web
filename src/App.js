import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import LeftSidebar from "./LeftSidebar.js";
import Middlebar from "./Middlebar.js";
import RightSidebar from "./RightSidebar.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LeftSidebar />
        <Middlebar />
        <RightSidebar />
      </div>
    );
  }
}

export default App;
