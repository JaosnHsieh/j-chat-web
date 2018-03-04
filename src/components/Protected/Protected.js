import React from "react";
import LeftSidebar from "../LeftSidebar";
import Middlebar from "../Middlebar";
import "./style.css";
const Protected = props => (
  <div className="protected-div">
    <LeftSidebar className="protected-div" />
    <Middlebar {...props} />
  </div>
);

export default Protected;
