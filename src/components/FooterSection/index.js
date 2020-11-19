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

    const initialState = {
        name: '',
        phone: '',
        email: '',
        message: ''
    };

    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log("submitted");
        console.log(state);

        for (let key in state) {
            if (state[key] === '') {
                setError(`Wpisz ${key}`)
                return
            }
        }
        setError('');
    };

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({ ...prev, [inputName]: value }));

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

                <FooterForm onSubmit={handleSubmit}>
                    <FooterH1>napisz do nas</FooterH1>
                    <FooterInputs>
                        <FooterLabel htmlFor="name">Imię i nazwisko</FooterLabel>
                        <FooterInput
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={handleInput}
                        />

                        <FooterLabel htmlFor="phone">Telefon</FooterLabel>
                        <FooterInput
                            type="number"
                            name="phone"
                            value={state.phone}
                            onChange={handleInput}
                        />

                        <FooterLabel htmlFor="email">E-mail</FooterLabel>
                        <FooterInput
                            type="email"
                            name="email"
                            value={state.email}
                            onChange={handleInput}
                        />

                        <FooterLabel htmlFor="message">Twoja wiadomość</FooterLabel>
                        <FooterInputTextarea
                            type="textarea"
                            name="message"
                            value={state.message}
                            onChange={handleInput}
                        />

                        <FooterError>
                            <FooterErrorP value={state.error} onChange={e => setError(e.target.value)}></FooterErrorP>
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