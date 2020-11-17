import styled from 'styled-components';
import images from '../../images/flat_35m_img1.jpg';

export const HeroContainer = styled.div`
    background: url(${images}) top center no-repeat;
    margin: 0 auto;
    width: 100%;
    height: 948px;
    max-width: 1400px;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    position: relative;
    z-index: 1;
`;

export const HeroText = styled.div`
    h1 {
        position: absolute;
        top: 15%;
        left: 7%;
        line-height: 7.5rem;
        font-size: 5.8rem;
        background: transparent;
        margin-bottom: 0;
        z-index: 1;
    }

    span {
        padding: 0 1rem;
        box-decoration-break: clone;
    }
    
`

export default HeroContainer;