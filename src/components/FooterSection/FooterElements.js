import styled from 'styled-components';
// import { Link } from 'react-router-dom;'

export const FooterContainer = styled.div`
    height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: 80rem;
    }

    @media screen and (max-width: 768px) {
        height: 100rem;
    }
`

export const FooterWrapper = styled.div`
    max-width: 110rem;
    margin: 0 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* align-items: center; */
    grid-gap: 1.6rem;
    padding: 5rem 0;
    border-top: 1px solid #979797;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0;
    }
`

export const FooterContact = styled.div`
    font-family: 'Oswald', cursive;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding: 4rem 0;
`

export const FooterH1 = styled.h1`
    font-size: 3rem;
    line-height: 3.4rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
`

export const FooterP = styled.p``

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