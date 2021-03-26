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

    .active {
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
    border: 1px solid var(--fontColor);
    padding: 5rem;
    background-color: var(--secondaryColor);
`