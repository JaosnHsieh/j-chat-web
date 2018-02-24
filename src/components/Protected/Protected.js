import React from "react";
import LeftSidebar from "../LeftSidebar";
import Middlebar from "../Middlebar";
import RightSidebar from "../RightSidebar";

const Protected = props => (
  <div className="container">
    <LeftSidebar />
    <Middlebar {...props} />
    <RightSidebar {...props} />
  </div>
);

export default Protected;
