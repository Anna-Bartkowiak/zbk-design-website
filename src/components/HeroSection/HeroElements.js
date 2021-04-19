import styled from 'styled-components';
import images from '../../images/flat_35m_img1.jpg';
import { IoIosArrowForward } from 'react-icons/io';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const HeroBackground = styled.div`
    background: url(${images}) top center no-repeat;
    background-color: var(--secondaryColor);
    margin: 0 auto;
    width: 100%;
    height: 53rem;
    max-width: 1400px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 480px) {
        margin: 0;
        width: 100%;
        background-position: top left -13%;
    }
`

export const HeroText = styled.div`
    height: 70%;
`

export const HeroH1 = styled.h1`
    position: absolute;
    top: 20%;
    left: 7%;
    line-height: 7.5rem;
    font-size: 5.8rem;
    margin-bottom: 0;
    z-index: 1;
    font-family: var(--fontFamilySecondary);

    @media screen and (max-width: 480px) {
        top: 22%;
        left: 2%;
        line-height: 6.2rem;
        font-size: 4.9rem;
    }
`

export const HeroSpan = styled.span`
    padding: 0 1rem;
    box-decoration-break: clone;
    background-color: var(--primaryColor);
    border: 1px solid var(--fourthColor);
`
export const HeroBtnWrapper = styled.div`
    position: absolute;
    top: 60%;
    left: 7%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 480px) {
        left: 2%;
    }
`

export const ArrowRight = styled(IoIosArrowForward) `
    margin-left: .5rem;
    margin-bottom: -0.7rem;
    font-size: 1.75rem;
    background: transparent;
    color: var(--secondaryColor);
`

export const HeroGuotation = styled.div`
    max-width: 95rem;
    text-align: center;
    margin: 0rem auto 8rem;
    padding: 3.5rem;
    font-size: 2rem;
    line-height: 3rem;
    color: var(--secondaryColor);
    font-style: oblique;
    background-color: var(--fourthColor);
    font-weight: 300;

    @media screen and (max-width: 1000px) {
        padding: 3.5rem;
        font-size: 1.8rem;
        line-height: 2.8rem;
    }

    @media screen and (max-width: 768px) {
        margin: 0rem auto 6rem;
    }

    @media screen and (max-width: 576px) {
        padding: 3rem;
    }
`

export const HeroP = styled.p`
    border: 1px solid var(--tertiaryColor);
    padding: 2.5rem;

    @media screen and (max-width: 576px) {
        padding: 2rem;
    }
`

export default HeroContainer;