// import React from 'react';
import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
    FooterContainer,
    FooterWrapper,
    FooterContact,
    FooterH1,
    FooterP,
    FooterForm,
    FooterInputs,
    FooterLabel,
    FooterInput,
    FooterInputTextarea,
    FooterError,
    FooterErrorP,
    FooterBtnWrapper
} from './FooterElements';

export const Footer = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterContact>
                    <FooterH1>kontakt</FooterH1>
                    <FooterP>+48 667 806 802</FooterP>
                    <FooterP>zbkdesign@zbkdesign.pl</FooterP>
                    <FooterP>Biuro</FooterP>
                    <FooterP>ul.Ks.Bogusława X 1/11</FooterP>
                    <FooterP>70-440 Szczecin</FooterP>
                </FooterContact>

                <FooterForm>
                    <FooterH1>napisz do nas</FooterH1>
                    <FooterInputs>
                        <FooterLabel htmlFor="name">Imię i nazwisko</FooterLabel>
                        <FooterInput type="text" name="name"></FooterInput>

                        <FooterLabel htmlFor="phone">Telefon</FooterLabel>
                        <FooterInput type="number" name="phone"></FooterInput>

                        <FooterLabel htmlFor="e-mail">E-mail</FooterLabel>
                        <FooterInput type="text" name="e-mail"></FooterInput>

                        <FooterLabel htmlFor="message">Twoja wiadomość</FooterLabel>
                        <FooterInputTextarea type="textarea" name="message"></FooterInputTextarea>

                        <FooterError>
                            <FooterErrorP>Error message</FooterErrorP>
                        </FooterError>
                    </FooterInputs>

                    <FooterBtnWrapper>
                        <Button
                            type="submit"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            bigger="false"
                            fontbigger="false">
                            wyślij
                        </Button>
                    </FooterBtnWrapper>
                </FooterForm>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;