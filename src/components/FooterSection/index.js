import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    FooterContact,
    FooterH1,
    FooterP,
    FooterLink
} from './FooterElements';

export const Footer = () => {
    return (
        <FooterContainer id="contact">
            <FooterWrapper>
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
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;