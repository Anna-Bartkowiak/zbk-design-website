import styled from 'styled-components';

export const OfferContainer = styled.div`
    max-width: 140rem;
    margin: 12rem auto;
    border: 1px solid var(--fontColor);

    /* @media screen and (max-width: 1000px) {
        margin: 10rem auto 0;
        padding: 4rem 0;
    }

    @media screen and (max-width: 768px) {
        margin: 8rem auto 0;
    } */
`

export const OfferTextWrapper = styled.div`
    max-width: 110rem;
    width: 100%;
    margin: 0 auto;
    padding: 8rem 12rem;

    /* @media screen and (max-width: 1000px) {
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
    } */
`

export const OfferH2 = styled.h2`
    font-size: 8rem;
    line-height: 8rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;

    /* @media screen and (max-width: 1000px) {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 4.8rem;
        line-height: 5.8rem;
    } */
`

export const OfferH3 = styled.h3`
    font-size: 2.6rem;
    line-height: 2.8rem;
    padding: 1rem 0;
    font-family: 'Unica One', sans-serif;
    margin-bottom: 1rem;

    /* @media screen and (max-width: 580px) {
        font-size: 2.2rem;
    } */
`

export const OfferP = styled.p`
    font-family: 'Oswald', cursive;
    font-size: 1.8rem;
    line-height: 2.8rem;

    &:not(:last-child) {
        padding-bottom: 2rem;
    }
`

export const OfferTabWrapper = styled.div`
    max-width: 110rem;
    min-height: 50rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 12rem 12rem;
`

export const OfferTab = styled.button`
    background: var(--tertiaryColor);
    white-space: no-wrap;
    padding: 0.8rem 1rem;
    color: var(--primaryColor);
    font-size: 1.7rem;
    font-family: 'Oswald';
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &.active {
        background: var(--fontColor);
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        background: var(--fontColor);
    }
`

export const OfferPWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 44.2rem;
    /* border: 1px solid var(--fontColor); */
    padding: 5rem;
    background-color: var(--secondaryColor);
`

export const OfferH3Grid = styled.h3`
    font-size: 3.6rem;
    line-height: 4.8rem;
    padding: 1rem 0;
    font-family: 'Unica One', sans-serif;
    margin-bottom: 1rem;
    text-align: center;
`

export const OfferGrid = styled.div`
    width: 100%;
    /* max-width: 110rem; */
    margin: 0 auto;
    padding: 8rem 12rem;
    display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(9, 1fr);
    /* row-gap: 2rem; */
	place-content: center center;
    /* grid-template-areas:
    "item1 item2 item2 item2"
    "item3 item3 item3 item4"
    "item5 item6 item6 item6"
    "item7 item7 item7 item8"
    "item9 item10 item10 item10"
    "item11 item11 item11 item12"
    "item13 item14 item14 item14"
    "item15 item15 item15 item16"
    "item17 item18 item18 item18"; */

    /* .item-1 {
        grid-area: item1;
    }
    .item-2 {
        grid-area: item2;
    }
    .item-3 {
        grid-area: item3;
    }
    .item-4 {
        grid-area: item4;
    }
    .item-5 {
        grid-area: item5;
    }
    .item-6 {
        grid-area: item6;
    }
    .item-7 {
        grid-area: item7;
    }
    .item-8 {
        grid-area: item8;
    }
    .item-9 {
        grid-area: item9;
    }
    .item-10 {
        grid-area: item10;
    }
    .item-11 {
        grid-area: item1;
    }
    .item-12 {
        grid-area: item2;
    }
    .item-13 {
        grid-area: item3;
    }
    .item-14 {
        grid-area: item4;
    }
    .item-15 {
        grid-area: item5;
    }
    .item-16 {
        grid-area: item6;
    }
    .item-17 {
        grid-area: item7;
    }
    .item-18 {
        grid-area: item8;
    } */
`

export const OfferGridItem = styled.div``

export const OfferGridNumber = styled.div`
    font-size: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: var(--fourthColor)
`

export const OfferGridP = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-family: 'Oswald',cursive;
    font-size: 1.8rem;
    line-height: 2.8rem;
    border: 1px solid var(--fourthColor);
    padding: 3rem 5rem;

    span {
        color: var(--fourthColor);
        font-family: 'Unica One',sans-serif;
        font-size: 3.5rem;
        line-height: 4.5rem;
        text-transform: uppercase;
        font-weight: 900;
    }
`