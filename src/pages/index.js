import React, { useState } from 'react';
import GlobalStyle from '../globalStyles.js';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import PricingSection from '../components/PricingSection';
import CalculatingSection from '../components/CalculatingSection';
import Result from '../components/ResultSection';
import Footer from '../components/FooterSection';


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <GlobalStyle />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <PricingSection />
            <CalculatingSection />
            <Result />
            <Footer />
        </>
    );
};

export default Home;
