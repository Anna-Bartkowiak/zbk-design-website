import React, { useState } from 'react';
import GlobalStyle from '../globalStyles.js';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Project1Section from '../components/Project1';
import Footer from '../components/FooterSection';


export const HomeProject1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <GlobalStyle />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Project1Section />
            <Footer />
        </>
    );
};

export default HomeProject1;
