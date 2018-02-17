import React from "react";
import { Link } from "react-router-dom";

const TabButton = ({ imageUrl, alt, children, url }) => (
  <div className={"tab-button"}>
    <Link to={url}>{children}</Link>
  </div>
);

export default TabButton;
