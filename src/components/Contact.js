import React from 'react'
import GlobalStyle from "../globalStyle";
import Dropdown from "./Dropdown";
import NavBar from "./Navbar";
import ContactInfo from './ContactInfo';

const Contact = () => {
    return (
        <div css={`border: 2px solid red`}>
            <GlobalStyle />
            <NavBar />
            <Dropdown />
            <ContactInfo />
        </div>
    )
};

export default Contact;
