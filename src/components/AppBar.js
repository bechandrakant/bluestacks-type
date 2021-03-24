import React from "react";
import logo from "../images/logo.png";

const AppBar = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#202640" }}>
      <div className="container">
        <img
          src={logo}
          alt="logo"
          style={{ width: 147, height: 45, margin: "17px 0 18px 0" }}
        />
      </div>
    </div>
  );
};

export default AppBar;
