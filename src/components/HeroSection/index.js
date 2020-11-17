import React from 'react';
import images from '../../images/flat_35m_img1.jpg';
import { HeroContainer, HeroText } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroText>
                <h1>
                    <span>projekty <br />wnętrz z <br />duszą</span>
                </h1>
            </HeroText>
        </HeroContainer>
    )
}

export default HeroSection;