import React from "react";
import { NavLink } from "react-router-dom";

const TabButton = ({ imageUrl, alt, children, url }) => (
  <NavLink to={url}>
    <div className={"tab-button"}>{children}</div>
  </NavLink>
);

export default TabButton;
