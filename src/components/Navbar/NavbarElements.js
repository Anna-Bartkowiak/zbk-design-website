import styled from 'styled-components';
// import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
    height: 80px;
    background-color: var(--primaryColor);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid var(--fourthColor);
    font-family: var(--fontFamilySecondary);

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

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const NavLogo = styled(LinkR) `
    justify-self: flex-start;
    cursor: pointer;
    width: 20rem;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const NavIcon = styled.img`
    width: 100%;
    height: 100%;
`

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
        color: var(--fontColor);
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
    border: 1px solid var(--tertiaryColor);
    margin-left: 1.2rem;

    & :hover,
    .active {
        transition: all 0.3s ease-in-out;
        background: var(--tertiaryColor);
        color: var(--secondaryColor);
    }
`

export const NavLinks = styled(LinkS) `
    color: var(--fontColor);
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    padding:  1.2rem 1.6rem;
    height: 100%;
    cursor: pointer;
`;