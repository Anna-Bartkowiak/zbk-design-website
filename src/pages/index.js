import React from 'react';
import GlobalStyle from '../globalStyles.js';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';
import Project1Section from '../components/Project1';
import AboutUsSection from '../components/AboutUs';


export const Home = () => {

    return (
        <>
            <GlobalStyle />
            <HeroSection />
            <GallerySection />
        </>
    );
};

export default Home;
