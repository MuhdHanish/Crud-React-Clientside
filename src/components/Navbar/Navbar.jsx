import React from "react";

import NavbarButton from "./NavbarButton/NavbarButton";

import "./Navbar.css"

const Navbar = (props) => {
  return (
     <header>
      <div className="container">
        <h3 className="text-with-underline">{props.details.headerText}</h3>
        <div className="right-section">
          {props.Admin?'':<NavbarButton linkText={props.details.linkText} link={props.details.link}/>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
