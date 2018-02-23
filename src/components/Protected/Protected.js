import React from "react";
import LeftSidebar from "../LeftSidebar";
import Middlebar from "../Middlebar";
import RightSidebar from "../RightSidebar";

const Protected = () => (
  <div className="container">
    <LeftSidebar />
    <Middlebar />
    <RightSidebar />
  </div>
);

export default Protected;
