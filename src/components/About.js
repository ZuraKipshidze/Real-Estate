import React from "react";
import GlobalStyle from "../globalStyle";
import AboutInfo from "./AboutInfo";
import Dropdown from "./Dropdown";
import NavBar from "./Navbar";

const About = () => {
  return <div>
    <GlobalStyle/>
    <NavBar/>
    <Dropdown/>
    <AboutInfo />
  </div>;
};

export default About;
