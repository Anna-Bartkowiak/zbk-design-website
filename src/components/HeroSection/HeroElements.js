import styled from 'styled-components';
import images from '../../images/flat_35m_img1.jpg';
import { IoIosArrowForward } from 'react-icons/io';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const HeroBackground = styled.div`
    background: url(${images}) top center no-repeat;
    margin: 0 auto;
    width: 100%;
    height: 60rem;
    max-width: 1400px;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 480px) {
        margin: 0;
        padding: 0;
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
    background-color: #f6f6f6;
`
export const HeroBtnWrapper = styled.div`
    position: absolute;
    top: 56%;
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
    margin-left: 1rem;
    font-size: 2rem;
    background: transparent;
    color: #fff;
`

export default HeroContainer;