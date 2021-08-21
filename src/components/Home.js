import React, { useState } from "react";
import GlobalStyle from "../globalStyle";
import Dropdown from "./Dropdown";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import NavBar from "./Navbar";
import { InfoData } from "../data/InfoData";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Dropdown />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </div>
  );
};

export default Home;
