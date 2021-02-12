import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutUsContainer = styled.div`
    height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 140rem;
    margin: 12rem auto 0;
    background-color: #e5e5e5;

    @media screen and (max-width: 1000px) {
        height: 80rem;
    }

    @media screen and (max-width: 768px) {
        height: 100rem;
    }
`

export const AboutUsWrapper = styled.div`
    max-width: 110rem;
    width: 100%;
    margin: 0 5rem;
    padding: 0 5rem;

    @media screen and (max-width: 1000px) {

    }

    @media screen and (max-width: 480px) {

    }
`

export const AboutUsGrid = styled.div`
    display: grid;
    grid-template-columns: 26% 31% 31%;
    column-gap: 6%;
`

export const AboutUsItem = styled.div`
    font-family: 'Oswald', cursive;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 2.4rem;
    padding: 4rem 0;
`

export const AboutUsImgWrapper = styled.div`
    padding-left: 2rem;
`

export const AboutUsImg = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    overflow: hidden;
`

export const AboutUsH2 = styled.h2`
    font-size: 8rem;
    line-height: 8rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
    margin-bottom: 2rem;
`

export const AboutUsH3 = styled.h3`
    font-size: 2.6rem;
    padding: 1rem 0;
    font-family: 'Unica One', sans-serif;
    margin-bottom: 2rem;
`

export const AboutUsP = styled.p`
    /* line-height: 1.8rem; */
`
export const AboutUsLink = styled(Link) `
    text-decoration: bold;
`

export const AboutUsBtnWrapper = styled.div`
    margin-top: 1.6rem;
`

export default AboutUsContainer;