import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo copy.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="db logo"></img>
        </Link>
      </div>
      <ul style={{ padding: "100px" }} className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
