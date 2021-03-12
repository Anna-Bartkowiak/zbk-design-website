import React, { useState } from 'react';
import GlobalStyle from '../globalStyles.js';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';
import Project1Section from '../components/Project1';
import AboutUsSection from '../components/AboutUs';
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
            <GallerySection />
            <Project1Section />
            <AboutUsSection />
            <Footer />
        </>
    );
};

export default Home;
