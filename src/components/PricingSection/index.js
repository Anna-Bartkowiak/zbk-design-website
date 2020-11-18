import React, { useState } from 'react';
// import images from '../../images/flat_35m_img1.jpg';
import { Button } from '../ButtonElement';
import {
    PricingContainer,
    PricingBackground,
    PricingText,
    PricingH2,
    PricingBtnWrapper
} from './PricingElements';

const PricingSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <PricingContainer id="pricing">
            <PricingBackground>
                <PricingText>
                    <PricingH2>
                        ciekawi cię ile wyniesie projekt<br />twojego mieszkania?
                    </PricingH2>
                </PricingText>
                <PricingBtnWrapper>
                    <Button
                        to='/'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        bigger="true"
                        fontbigger="true">
                        oblicz
                    </Button>
                </PricingBtnWrapper>
            </PricingBackground>

        </PricingContainer>
    )
}

export default PricingSection;