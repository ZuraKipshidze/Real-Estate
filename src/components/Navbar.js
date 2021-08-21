import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components/macro";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import * as actions from "../Redux/Actions";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const Logo = styled(Link)`
  font-style: italic;
  color: #10595E;
  text-decoration: none;
`;

const NavLink = css`
  color: #10595E;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    background-size: contain;
    height: 40px;
    width: 40px;
    position: absollute;
    top: 0;
    right: 0;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBar = ({}) => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.active);

  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={() => dispatch(actions.setActive(!active))} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.Link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>

      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default NavBar;
