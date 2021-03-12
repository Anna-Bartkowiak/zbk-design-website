import styled from 'styled-components';

export const Project1Container = styled.div`
	max-width: 114rem;
	margin: 10rem auto;
`

export const Project1Hero = styled.div`
	max-width: 110rem;
    width: 100%;
    margin: 0 auto;
	/* padding: 0 5rem; */
	text-align: center;
`

export const Project1H1 = styled.h1`
	font-size: 5.8rem;
    line-height: 6.8rem;
    font-family: 'Unica One',sans-serif;
    font-weight: 400;
    padding-bottom: 2rem;
`

export const Project1H2 = styled.h2`
	font-size: 2rem;
`

export const Project1Wrapper = styled.div`
	display: flex;
	margin-top: 4rem;
	padding: 0 1rem;
`

export const Project1HeroItem = styled.div`

`

export const Project1HeroImg = styled.img`
	max-width: 38rem;
	border-radius: 50%;
	/* border: 1px solid var(--tertiaryColor); */
	margin-left: 3rem;
	overflow: hidden;
`

export const Project1TextWrapper = styled.div`
	display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	font-size: 2rem;
	font-family: 'Oswald',cursive;
	padding: 4rem;
	border: 2px dashed var(--secondaryColor);
`

export const Project1P = styled.p`
	`

export const Project1Gallery = styled.div`
	width: 100%;
    max-width: 110rem;
    margin: 5rem auto;
	padding: 0 1rem;

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

export const Project1GalleryGrid = styled.div`
	display: grid;
    grid-template-columns: repeat(3
	, 1fr);
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    /* grid-template-rows: 35rem 35rem 35rem; */
	grid-gap: 1%;

    @media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2
		, 1fr);
		/* grid-template-rows: 1fr 1fr 1fr 1fr 1f 1fr; */
		grid-gap: 1rem;
        /* grid-template-rows: 43rem 43rem 43rem; */
    }

    @media screen and (max-width: 768px) {
        grid-template-rows: 31rem 31rem 31rem 31rem 31rem;
    }

    @media screen and (max-width: 576px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(15, 35rem);
        grid-template-areas:
            "item1"
            "item2"
            "item4"
            "item3"
            "item5"
            "item6"
            "item8"
            "item7"
            "item9"
			"item10"
            "item11"
            "item12"
            "item13"
            "item14"
            "item15";

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
        .item-9 {
            grid-area: item9;
        }
		.item-10 {
            grid-area: item1;
        }
        .item-12 {
            grid-area: item2;
        }
        .item-12 {
            grid-area: item3;
        }
        .item-13 {
            grid-area: item4;
        }
        .item-14 {
            grid-area: item5;
        }
        .item-15 {
            grid-area: item6;
        }
    }
`

export const Project1GalleryItem = styled.div`
	display: flex;
    justify-content: center;
    overflow: hidden;

	/* &:nth-child(odd) {
		border: 1px solid var(--tertiaryColor);
	}

	&:nth-child(even) {
		border: 1px solid var(--fontColor);
	} */
`

export const Project1GalleryImg = styled.img`
	height: 100%;
    width: 100%;
    overflow: hidden;
    /* -webkit-filter: grayscale(100%);
	filter: grayscale(100%); */
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .5s ease-in-out;
	transition: .5s ease-in-out;

    &:hover {
    -webkit-filter: grayscale(0);
	filter: grayscale(0);
    -webkit-transform: scale(1);
	transform: scale(1);
    overflow: hidden;
`