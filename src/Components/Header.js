import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../Images/logo.png";

function Header() {
  return (
    <header className="header_container">
      <img className="app_logo" src={logo} width="24" height="24" />
      <span className="app_name">Sampsa Isohätälä</span>
      {/* <Navigation/> */}
    </header>
  );
}

export default Header;
