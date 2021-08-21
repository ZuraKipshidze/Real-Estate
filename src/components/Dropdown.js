import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  possition: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100")};
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-colums: 1fr;
  grid-template-rows: repeat(4, 88px);
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 88px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

function Dropdown({}) {
  const active = useSelector((state) => state.active);
  return <div>{active ? <div>223423432</div> : null}</div>;
}

export default Dropdown;
