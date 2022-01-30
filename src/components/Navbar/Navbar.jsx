import React from "react";
import Burger from "./Burguer";
import logo from "./logo.png";
import { Nav } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <a href="/">
        <img src={logo} alt="Logo da empresa"/>
      </a>
      <Burger />
    </Nav>
  );
};

export default Navbar;
