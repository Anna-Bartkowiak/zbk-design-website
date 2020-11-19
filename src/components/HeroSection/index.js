import React, { useState } from 'react';
// import images from '../../images/flat_35m_img1.jpg';
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBackground,
    HeroText,
    HeroH1,
    HeroSpan,
    HeroBtnWrapper,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBackground>
                <HeroText>
                    <HeroH1>
                        <HeroSpan>projekty <br />wnętrz z <br />duszą</HeroSpan>
                    </HeroH1>
                </HeroText>
                <HeroBtnWrapper>
                    <Button
                        to='project'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        bigger="true"
                        fontbigger="true">
                        Przemyślane i uzytkowe projekty
                        <ArrowRight />
                    </Button>
                </HeroBtnWrapper>
            </HeroBackground>

        </HeroContainer>
    )
}

export default HeroSection;