
import React from "react";
import { NavLink } from "react-router-dom";
const styling = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "pink",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return <div className="navbar">
    <NavLink to="/" exact style={styling} activeStyle={{background:"red"}}>Home</NavLink>
    <NavLink to="/movies" exact style={styling} activeStyle={{background:"red"}}>Movies</NavLink>
    <NavLink to="/directors" exact style={styling} activeStyle={{background:"red"}}>Directors</NavLink>
    <NavLink to="/actors" exact style={styling} activeStyle={{background:"red"}}>Actors</NavLink>
  </div>;
}

export default NavBar;