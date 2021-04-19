import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import images from '../../images/MainGallery/img1_contact.jpg';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90rem;
    padding-bottom: 10rem;
    position: relative;

    @media screen and (max-width: 1000px) {
        min-height: 70rem;
        padding-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        min-height: 50rem;
    }
`

export const FooterWrapper = styled.div`
    max-width: 110rem;
    width: 100%;
    margin: 0 5rem;
    padding: 0 5rem;

    @media screen and (max-width: 1000px) {
        margin: 0 5rem 5rem 5rem;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        padding: 0 4rem;
    }

    @media screen and (max-width: 400px) {
        margin-bottom: 4rem;
        padding: 0 2rem;
    }
`

export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: 33% auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 40% auto;
        column-gap: 2%;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 100%;
        grid-row: auto;
        grid-template-areas:
            "item1";

        .item-1 {
            grid-area: item1;
        }
        .item-2 {
            grid-area: item2;
            display: none;
        }
    }

    @media screen and (max-width: 480px) {

    }
`

export const FooterContact = styled.div`
    font-weight: 400;
    font-size: 2rem;
    line-height: 3.2rem;

    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
`

export const FooterImg = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: url(${images}) top center no-repeat;
    margin: 0 auto;
    object-fit: cover;
`

export const FooterH1 = styled.h1`
    font-size: 8rem;
    line-height: 8rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
    padding-bottom: 2rem;

    @media screen and (max-width: 1000px) {
        font-size: 4.8rem;
        line-height: 5.8rem;
    }
`

export const FooterP = styled.p``

export const FooterLink = styled.a`
    color: var(--font-color);

`

export const FooterCopyright = styled.div`
    position: absolute;
    bottom: -11.9rem;
    height: 18rem;
    width: 100%;
    text-align: center;
    background-color: var(--fontColor);

    @media screen and (max-width: 100px) {
        height: 10rem;
        bottom: -3.9rem;
    }

    @media screen and (max-width: 768px) {
        height: 6rem;
        bottom: 0;
    }
`

export const FooterCopyrightP = styled.p`
    font-size: 2rem;
    height: 100%;
    font-weight: 300;
    line-height: 18.5rem;
    color: var(--fourthColor);

    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
        line-height: 6.5rem;
    }
`

export default FooterContainer;