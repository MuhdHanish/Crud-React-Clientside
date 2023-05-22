import React from "react";

import NavbarButton from "./NavbarButton/NavbarButton";

import "./Navbar.css"

const Navbar = () => {
  return (
     <header>
      <div className="container">
        <h3 className="text-with-underline">Home</h3>
        <div className="right-section">
          <NavbarButton/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
