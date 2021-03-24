import React from "react";
import { routes } from "../constants/Routes";

const Nav = ({ lang, activeTab, updateActiveTab }) => {
  return (
    <nav
      style={{
        listStyleType: "none",
        borderBottom: "2px solid #e5e0e0",
        paddingBottom: 10,
      }}
      className="container"
    >
      {routes.map((route) => (
        <li
          style={{
            display: "inline",
            padding: 10,
            fontWeight: route.path === activeTab ? 600 : 300,
            color: route.path === activeTab ? "green" : "black",
            borderBottom: route.path === activeTab ? "2px solid green" : null,
          }}
          onClick={() => updateActiveTab(route.path)}
          key={route.id}
        >
          {route.label[lang]}
        </li>
      ))}
    </nav>
  );
};

export default Nav;
