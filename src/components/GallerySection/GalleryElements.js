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
        margin: 3rem auto;
        padding: 0 1rem;
    }

    @media screen and (max-width: 576px) {
        max-width: 540px;
    }
`

export const GalleryWrapper = styled.div``

export const GalleryH2 = styled.h2`
    font-size: 5.8rem;
    line-height: 6.8rem;
    font-family: var(--fontFamilySecondary);
    font-weight: 400;
    padding-bottom: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 4.8rem;
        line-height: 5.8rem;
        padding-bottom: 2rem;
        text-align: center;
    }
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
        grid-template-columns: 100%;
        grid-template-rows: repeat(8, 35rem);
        grid-template-areas:
            "item1"
            "item2"
            "item4"
            "item3"
            "item5"
            "item6"
            "item8"
            "item7";

        .item-1 {
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
    }
`

export const GalleryImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    /* -webkit-filter: grayscale(100%);
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
    overflow: hidden; */
}
`

export const GalleryTextContainer = styled.div`
    padding: 8rem;
    font-size: 1.7rem;
    line-height: 2.2rem;
    letter-spacing: 1px;
    border: 1px solid var(--fourthColor);
    display:flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
        padding: 4rem;
        font-size: 1.6rem;
        line-height: 2rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2.8rem;
        font-size: 1.5rem;
        line-height: 1.6rem;
    }

    @media screen and (max-width: 576px) {
        padding: 4rem;
    }
`

export const GalleryH3 = styled.h3`
    align-self: flex-start;
    font-size: 3rem;
    text-transform: uppercase;
    background: linear-gradient(to bottom, var(--tertiaryColor) 0%, var(--tertiaryColor) 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    padding-bottom: .8rem;
    background-size: 3px 18px;
    font-family: var(--fontFamilySecondary);

    @media screen and (max-width: 1000px) {
        font-size: 2.6rem;
        background-size: 2px 16px;
    }

    @media screen and (max-width: 768px) {
        font-size: 2.1rem;
    }

    @media screen and (max-width: 576px) {
        font-size: 2.3rem;
    }
`

export const GalleryH4 = styled.h4`
    font-size: 1.4rem;
    padding: .8rem 0;
    font-weight: 400;

    @media screen and (max-width: 1000px) {
        font-size: 1.2rem;
        padding: .4rem 0;
    }
`
export const GalleryP = styled.p`
    padding: 2rem 0 6rem;
    font-weight: 400;

    @media screen and (max-width: 1000px) {
        padding: 1.5rem 0 3.5rem;
        font-size: 1.4rem;
    }
    @media screen and (max-width: 768px) {
        padding: .6rem 0 1.8rem;
        font-size: 1.3rem;
    }

    @media screen and (max-width: 576px) {
        padding: 1rem 0 2rem;
        font-size: 1.4rem;
    }
`

export const GalleryBtnWrapper = styled.div``

export const ArrowRight = styled(VscArrowSmallRight) `
    margin-left: 2rem;
    margin-bottom: -0.6rem;
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
        margin-left: .8rem;
        margin-bottom: -0.5rem;
        font-size: 2.2rem;
    }

    @media screen and (max-width: 576px) {
        display: none;
    }
`

export const ArrowLeft = styled(VscArrowSmallLeft) `
    margin-right: 2rem;
    margin-bottom: -0.6rem;
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
        margin-right: .8rem;
        margin-bottom: -0.5rem;
        font-size: 2.2rem;
    }

    @media screen and (max-width: 576px) {
        display: none;
    }
`