import styled from 'styled-components';
import { VscArrowSmallRight, VscArrowSmallLeft } from 'react-icons/vsc';

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

export const GalleryWrapper = styled.div``
export const GalleryH2 = styled.h2`
    font-size: 5.8rem;
    line-height: 6.8rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
    padding-bottom: 3rem;
`

export const GalleryItem = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
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

export const GalleryImage = styled.img`
    height: 100%;
    width: 100%;
    overflow: hidden;
    -webkit-filter: grayscale(100%);
	filter: grayscale(100%);
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .5s ease-in-out;
	transition: .5s ease-in-out;

    &:hover {
    -webkit-filter: grayscale(0);
	filter: grayscale(0);
    -webkit-transform: scale(1.2);
	transform: scale(1.2);
    overflow: hidden;
}
`

export const GalleryTextContainer = styled.div`
    padding: 8rem;
    font-size: 1.7rem;
    line-height: 2.2rem;
    letter-spacing: 1px;
    border: 1px solid #928165;
`
export const GalleryH3 = styled.h3`
    display: inline-block;
    font-size: 3rem;
    text-transform: uppercase;
    background: linear-gradient(to bottom, #c08d17 0%, #c08d17 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    padding-bottom: .8rem;
    background-size: 3px 22px;
`

export const GalleryH4 = styled.h4`
    font-size: 1.6rem;
    padding: 1rem 0;
`
export const GalleryP = styled.p`
    font-family: 'Oswald',cursive;
    padding: 2rem 0 6rem;
    font-weight: 300;
`

export const GalleryBtnWrapper = styled.div`

`

export const ArrowRight = styled(VscArrowSmallRight) `
    margin-left: 2rem;
    margin-bottom: -0.6rem;
    font-size: 2.5rem;
`

export const ArrowLeft = styled(VscArrowSmallLeft) `
    margin-right: 2rem;
    margin-bottom: -0.6rem;
    font-size: 2.5rem;
`