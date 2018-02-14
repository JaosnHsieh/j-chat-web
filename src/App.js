import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import Middlebar from "./Middlebar.js";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Middlebar />
      </div>
    );
  }
}

export default App;
