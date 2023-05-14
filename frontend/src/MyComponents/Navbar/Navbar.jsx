import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
export const Navbar=()=> {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span>Campus-Connect</span>
        <span>Connect.Collaborate.Create</span>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/chat"><img src={require("./chat.png")} alt="" /></Link>
          </li>
          <li>
            <Link to="/settings"><img src={require("./settings.png")} alt="" /></Link>
          </li>
          <li>
            <Link to="/profiles"><img src={require("./profile.webp")} alt="" /></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


