import React, { Component } from "react";

// stateless functional Component
const Navbar = ({totalCounters}) => {
  console.log("Navbar-Render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" hrerf="#">
        Navabr
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
