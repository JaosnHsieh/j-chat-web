import React from "react";
import "./style.css";
const Button = ({ ...props,children }) => <button className="btn-default" {...props}>{children}</button>;

export default Button;
