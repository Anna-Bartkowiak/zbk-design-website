import React from 'react';
import GlobalStyle from '../globalStyles.js';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';
import OfferSection from '../components/Offer';


export const Home = () => {

    return (
        <>
            <GlobalStyle />
            <HeroSection />
            <GallerySection />
            <OfferSection />
        </>
    );
};

export default Home;
