import React from "react";
import GlobalStyle from "../globalStyle";
import Dropdown from "./Dropdown";
import NavBar from "./Navbar";
import RentalsInfo from "./RentalsInfo";
import RentalsInfo2 from "./RentalsInfo2";

const Rentals = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Dropdown />
      <RentalsInfo />
      <RentalsInfo2 />
    </div>
  );
};

export default Rentals;
