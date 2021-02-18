import styled from 'styled-components';
import { Link } from 'react-router-dom';
import images from '../../images/MainGallery/img1_contact.jpg';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 140rem;
    padding: 10rem 0;
    margin: 12rem auto 12rem;
    border: 1px solid #2a2a2a;

    @media screen and (max-width: 1000px) {
        margin: 10rem auto 12rem;
    }

    @media screen and (max-width: 768px) {
        margin: 8rem;
        padding: 7rem 0;
    }

    @media screen and (max-width: 480px) {
        margin: 8rem 3rem;
    }

    @media screen and (max-width: 400px) {
        margin: 6rem 1rem;
        padding: 5rem 0;
    }
`

export const FooterWrapper = styled.div`
    max-width: 110rem;
    width: 100%;
    margin: 0 5rem;
    padding: 0 5rem;

    @media screen and (max-width: 1000px) {

    }

    @media screen and (max-width: 768px) {
        text-align: center;
        padding: 0 4rem;
    }

    @media screen and (max-width: 480px) {
        margin: 0;
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
    font-family: 'Oswald', cursive;
    font-weight: 300;
    font-size: 2rem;
    line-height: 3.5rem;

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

    @media screen and (max-width: 480px) {

    }
`

export const FooterP = styled.p``

export const FooterLink = styled(Link) `
    text-decoration: bold;
`

export default FooterContainer;