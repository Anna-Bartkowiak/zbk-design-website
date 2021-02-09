import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;

    @media screen and (max-width: 1000px) {
        height: 80rem;
    }

    @media screen and (max-width: 768px) {
        height: 100rem;
    }
`

export const FooterWrapper = styled.div`
    max-width: 110rem;
    width: 100%;
    margin: 0 5rem;
    padding: 0 5rem;

    @media screen and (max-width: 1000px) {

    }

    @media screen and (max-width: 480px) {

    }
`

export const FooterContact = styled.div`
    font-family: 'Oswald', cursive;
    font-weight: 300;
    font-size: 2rem;
    line-height: 4rem;
    padding: 4rem 0;
`

export const FooterH1 = styled.h1`
    font-size: 8rem;
    line-height: 10rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
`

export const FooterP = styled.p`
`
export const FooterLink = styled(Link) `
    text-decoration: bold;
`

export const FooterForm = styled.form`
    width: 100%;
    max-width: 70rem;
    padding: 4rem;

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`

export const FooterInputs = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
`

export const FooterLabel = styled.label`
    margin-top: 1.6rem;
    margin-bottom: 0.6rem;
`

export const FooterInput = styled.input`
    width: 25rem;
    padding: 0.5rem;
    font-size: 1.6rem;
    font-family: 'Oswald', cursive;
`

export const FooterInputTextarea = styled.textarea`
    height: 10rem;
`

export const FooterError = styled.div`
    margin-top: 1.6rem;
`

export const FooterErrorP = styled.div``

export const FooterBtnWrapper = styled.div`
    margin-top: 1.6rem;
`

export default FooterContainer;