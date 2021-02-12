import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBackground,
    HeroText,
    HeroH1,
    HeroSpan,
    HeroBtnWrapper,
    ArrowRight,
    HeroGuotation,
    // HeroIcon,
    HeroP
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
                        <HeroSpan>projekty <br />wnętrz z <br />duszą.</HeroSpan>
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
            <HeroGuotation>
                {/* <HeroIcon><i className="fas fa-quote-left"></i></HeroIcon> */}
                <HeroP>
                    „Każdy marzy o tym by żyć w przestrzeni odzwierciedlającej jego wewnętrzne pragnienia, spójnej ze stylem życia, potrzebami oraz poczuciem estetyki.  Twoje pragnienie ukojenia po ciężkim dniu pracy, będzie dla mnie inspiracją do stworzenia komfortowego wnętrza pełnego cech, które stanowią dla Ciebie źródło spełnienia.  Idealne wnętrze już istnieje, w Twoim sercu i umyśle, moją rolą jest wcielić je w życie za pomocą dobrego projektu”
                </HeroP>
            </HeroGuotation>
        </HeroContainer>
    )
}

export default HeroSection;