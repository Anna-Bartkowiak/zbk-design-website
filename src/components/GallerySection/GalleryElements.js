import styled from 'styled-components';

export const GalleryContainer = styled.div`
    width: 100%;
    max-width: 110rem;
    margin: 5rem auto;
    padding: 0 5rem;

    @media screen and (max-width: 1000px) {
        max-width: 960px;
    }

    @media screen and (max-width: 768px) {
        max-width: 720px;
    }

    @media screen and (max-width: 576px) {
        max-width: 540px;
    }
`

export const GalleryWrapper = styled.div`

`
export const GalleryH2 = styled.h2`
    font-size: 8rem;
    line-height: 10rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
    padding-bottom: 3rem;
`

export const GalleryItem = styled.div`
    display: flex;
    justify-content: center;
`

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50rem 50rem 50rem 50rem;

    @media screen and (max-width: 1000px) {
        grid-template-rows: 43rem 43rem 43rem 43rem;
    }

    @media screen and (max-width: 768px) {
        grid-template-rows: 31rem 31rem 31rem 31rem;
    }

    @media screen and (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 31rem 31rem 31rem 31rem 31rem 31rem 31rem 31rem;
    }
`