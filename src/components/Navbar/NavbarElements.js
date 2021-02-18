import styled from 'styled-components';
// import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 2.4rem;
    max-width: 1400px;
`;

export const NavLogo = styled(LinkScroll) `
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    img: require('../../images/zbk_design_logo_horizontal_copy.png');
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-65%, 50%);
        font-size: 3.2rem;
        cursor: pointer;
        color: #2a2a2a;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    padding-right: 1.6rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    border: 1px solid #c08d17;
    margin-left: 1.2rem;

    & :hover,
    .active {
        transition: all 0.3s ease-in-out;
        background: #c08d17;
        color: #e5e5e5;
    }
`

export const NavLinks = styled(LinkScroll) `
    color: #2a2a2a;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    padding:  1.2rem 1.6rem;
    height: 100%;
    cursor: pointer;
`;