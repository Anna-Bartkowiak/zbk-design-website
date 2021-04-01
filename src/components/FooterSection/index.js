import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    FooterGrid,
    FooterContact,
    FooterH1,
    FooterP,
    FooterLink,
    FooterImg,
    FooterCopyright,
    FooterCopyrightP
} from './FooterElements';

export const Footer = () => {
    return (
        <FooterContainer id="contact">
            <FooterWrapper>
                <FooterGrid>
                    <FooterContact className="item-1">
                        <FooterH1>kontakt.</FooterH1>
                        <FooterP>Zuzanna Bartoszewska-Kałuc Interiors</FooterP>
                        <FooterP>
                            <FooterLink
                                href='tel:+48667806802'
                                target='_blank'
                            >+48 667 806 802</FooterLink>
                        </FooterP>
                        <FooterP>
                            <FooterLink
                                href='mailto:zbkdesign@zbkdesign.pl'
                                target='_blank'
                            >zbkdesign@zbkdesign.pl</FooterLink>
                        </FooterP>
                        <FooterP>
                            <FooterLink
                                href='https://www.facebook.com/ZBK.projektowaniewnetrz'
                                target='_blank'
                            >Facebook</FooterLink>
                        </FooterP>
                        <FooterP>ul. Kolorowa 29</FooterP>
                        <FooterP>72-006 Mierzyn</FooterP>
                    </FooterContact>
                    <FooterImg className="item-2" />
                </FooterGrid>
            </FooterWrapper>
            <FooterCopyright>
                <FooterCopyrightP>Copyright &copy; 2021 Zuzanna B. Kałuc</FooterCopyrightP>
            </FooterCopyright>
        </FooterContainer>
    )
}

export default Footer;