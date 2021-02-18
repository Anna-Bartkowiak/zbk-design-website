import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutUsContainer = styled.div`
    padding: 10rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 140rem;
    margin: 12rem auto 0;
    background-color: #e5e5e5;

    @media screen and (max-width: 1000px) {
        margin: 10rem auto 0;
        padding: 4rem 0;
    }

    @media screen and (max-width: 768px) {
        margin: 8rem auto 0;
    }
`

export const AboutUsWrapper = styled.div`
    max-width: 110rem;
    width: 100%;
    margin: 0 5rem;
    padding: 0 5rem;

    @media screen and (max-width: 1000px) {
        height: 100%;
        display: flex;
        padding: 6rem 3rem;
    }

    @media screen and (max-width: 768px) {
        padding: 3rem;
    }

    @media screen and (max-width: 580px) {
        margin: 0;
    }

    @media screen and (max-width: 400px) {
        padding: 2rem 0;
    }
`

export const AboutUsGrid = styled.div`
    display: grid;
    grid-template-columns: 30% 32% 32%;
    column-gap: 3%;

    @media screen and (max-width: 1000px) {
        grid-template-columns: auto 60%;
        grid-row: auto;
        grid-template-areas:
            "item1 item2"
            "item3 item3";

        .item-1 {
            grid-area: item1;
        }
        .item-2 {
            grid-area: item2;
        }
        .item-3 {
            grid-area: item3;
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 100%;
        grid-row: auto;
        grid-template-areas:
            "item1"
            "item2"
            "item3";
    }
`

export const AboutUsP = styled.p`
    font-family: 'Oswald', cursive;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 2.4rem;
`

export const AboutUsItem = styled.div`

    &:not(:first-child){
        border: 1px solid #c08d17;
        padding: 2rem;
    }

    @media screen and (max-width: 1000px) {
        &:not(:first-child){
            padding: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &:not(:last-child){
            margin-bottom: 6rem;
        }
    }

    @media screen and (max-width: 768px) {
        &:not(:last-child){
            margin-bottom: 4rem;
        }
    }

    @media screen and (max-width: 580px) {
        font-size: 1.6rem;
        line-height: 2.2rem;
    }
`

export const AboutUsImgWrapper = styled.div`
    text-align: center;
`

export const AboutUsImg = styled.img`
    height: 220px;
    width: 220px;
    border-radius: 50%;
    border: 1px solid #c08d17;
    overflow: hidden;
`

export const AboutUsH2 = styled.h2`
    font-size: 8rem;
    line-height: 8rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
    margin-bottom: 5rem;
    text-align: center;

    @media screen and (max-width: 1000px) {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 4.8rem;
        line-height: 5.8rem;
    }
`

export const AboutUsH3 = styled.h3`
    font-size: 2.6rem;
    line-height: 2.8rem;
    padding: 1rem 0;
    font-family: 'Unica One', sans-serif;
    margin-bottom: 1rem;

    @media screen and (max-width: 580px) {
        font-size: 2.2rem;
    }
`

export const AboutUsLink = styled(Link) `
    text-decoration: bold;
`

export const AboutUsBtnWrapper = styled.div`
    margin-top: 1.6rem;
`

export default AboutUsContainer;