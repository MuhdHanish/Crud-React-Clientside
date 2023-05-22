import React from "react";

import NavbarButton from "./NavbarButton/NavbarButton";

import "./Navbar.css"

const Navbar = (props) => {
  const {headerText,linkText,link} = props.details
  return (
     <header>
      <div className="container">
        <h3 className="text-with-underline">{headerText}</h3>
        <div className="right-section">
          <NavbarButton linkText={linkText} link={link}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
