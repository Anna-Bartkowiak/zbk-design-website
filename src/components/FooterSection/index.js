import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    FooterGrid,
    FooterContact,
    FooterH1,
    FooterP,
    FooterLink,
    FooterImg
} from './FooterElements';
import image1 from '../../images/MainGallery/img1_contact.jpg';

export const Footer = () => {
    return (
        <FooterContainer id="contact">
            <FooterWrapper>
                <FooterGrid>
                    <FooterContact>
                        <FooterH1>kontakt.</FooterH1>
                        <FooterP>Zuzanna Bartoszewska-Kałuc Interiors</FooterP>
                        <FooterP>
                            <FooterLink href='tel:+48667806802'>+48 667 806 802</FooterLink>
                        </FooterP>
                        <FooterP>
                            <FooterLink>zbkdesign@zbkdesign.pl</FooterLink>
                        </FooterP>
                        <FooterP>
                            <FooterLink>Facebook</FooterLink>
                        </FooterP>
                        <FooterP>ul. Kolorowa 29</FooterP>
                        <FooterP>72-006 Mierzyn</FooterP>
                    </FooterContact>
                    <FooterImg src={image1} alt='image1' />
                </FooterGrid>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;