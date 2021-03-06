import styled from 'styled-components';

export const ProjectContainer = styled.div`
	max-width: 200rem;
	margin: 5rem auto;
`

export const ProjectHero = styled.div`
	max-width: 110rem;
    width: 100%;
    margin: 0 auto;
	padding: 0 5rem;
	text-align: center;

    @media screen and (max-width: 576px){
        padding: 0 3rem;
    }

    @media screen and (max-width: 400px){
        padding: 0;
    }
`

export const ProjectH1 = styled.h1`
	font-size: 5.8rem;
    line-height: 6.8rem;
    font-family: var(--fontFamilySecondary);
    font-weight: 400;
    padding-bottom: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 4.8rem;
        line-height: 5.8rem;
    }
`

export const ProjectH2 = styled.h2`
	font-size: 2rem;
    font-family: var(--fontFamilySecondary);

    @media screen and (max-width: 576px) {
        padding: 0 1rem;
    }
`

export const ProjectWrapper = styled.div`
	display: flex;
	margin-top: 4rem;
	padding: 0 1rem;
`

export const ProjectHeroItem = styled.div`

`

export const ProjectTextWrapper = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	font-size: 2rem;
	padding: 4rem;
	border: 2px dashed var(--secondaryColor);
    font-weight: 300;

    @media screen and (max-width: 576px) {
        padding: 3rem;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 400px) {
        padding: 2rem;
    }
`

export const ProjectP = styled.p`
    span {
        font-weight: 700;
    }
`

export const ProjectGallery = styled.div`
	width: 100%;
    margin: 8rem auto;
	padding: 0 1rem;

	@media screen and (max-width: 1000px) {
        max-width: 960px;
    }

    @media screen and (max-width: 768px) {
        max-width: 720px;
        margin: 6rem auto;
        padding: 0 1rem;
    }

    @media screen and (max-width: 576px) {
        max-width: 540px;
    }
`

export const ProjectGalleryGrid = styled.div`
	display: grid;
    grid-template-columns: repeat(3
	, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 1rem;

    @media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2
		, 1fr);
    }

    @media screen and (max-width: 576px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(20, 1fr);
        grid-template-areas:
            "item1"
            "item2"
            "item3"
            "item4"
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
            "item15"
            "item16"
            "item17"
            "item18"
            "item19"
            "item20";

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
            grid-area: item10;
        }
        .item-11 {
            grid-area: item11;
        }
        .item-12 {
            grid-area: item12;
        }
        .item-13 {
            grid-area: item13;
        }
        .item-14 {
            grid-area: item14;
        }
        .item-15 {
            grid-area: item15;
        }
        .item-16 {
            grid-area: item16;
        }
        .item-17 {
            grid-area: item17;
        }
        .item-18 {
            grid-area: item18;
        }
        .item-19 {
            grid-area: item19;
        }
        .item-20 {
            grid-area: item20;
        }
    }
`

export const ProjectGalleryItem = styled.div`
	display: flex;
    justify-content: center;
    overflow: hidden;
`

export const ProjectGalleryImg = styled.img`
	height: 100%;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
`

export const ProjectOther = styled.div`
    width: 100%;
    min-height: 50rem;
    max-width: 140rem;
    margin: 0 auto;
    padding: 8rem 2rem;
    text-align: center;
    background: #e5e5e5;

    @media screen and (max-width: 576px) {
        padding: 4rem 0;
    }
`

export const ProjectOtherGrid = styled.div`
    min-height: 55rem;
    display: grid;
    grid-template-columns: repeat(3
	, 1fr);
    grid-template-rows: 1fr;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 60%;
        grid-template-rows: repeat(3, 35rem);
        grid-template-areas:
            "item12"
            "item13"
            "item14";
        justify-content: center;

        .item-12 {
            grid-area: item12;
        }
        .item-13 {
            grid-area: item13;
        }
        .item-14 {
            grid-area: item14;
        }
    }

     @media screen and (max-width: 576px) {
        grid-template-columns: 80%;
    }
`

export const ProjectOtherItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`

export const ProjectOtherImg = styled.img`
    height: 100%;
    width: 100%;
    overflow: hidden;
    -webkit-filter: grayscale(100%);
	filter: grayscale(100%);
    object-fit: cover;
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .5s ease-in-out;
	transition: .5s ease-in-out;

    &:hover {
    -webkit-filter: grayscale(0);
	filter: grayscale(0);
    -webkit-transform: scale(1.1);
	transform: scale(1.1);
    overflow: hidden;
`

export const ProjectOtherBtnWrapper = styled.div``