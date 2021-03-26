import React from 'react';
import GlobalStyle from '../globalStyles.js';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';


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
