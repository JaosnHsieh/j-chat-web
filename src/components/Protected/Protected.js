import React from "react";
import LeftSidebar from "../LeftSidebar";
import Middlebar from "../Middlebar";
import RightSidebar from "../RightSidebar";
import "./style.css";
const Protected = props => (
  <div className="protected-div">
    <LeftSidebar className="protected-div" />
    <Middlebar {...props} />
    {/* <RightSidebar {...props} /> */}
  </div>
);

export default Protected;
