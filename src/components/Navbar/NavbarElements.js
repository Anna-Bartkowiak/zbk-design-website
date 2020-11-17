// import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    /* margin-top: -80px; */
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
    padding: 0;
    max-width: 1400px;
`;
export const NavLogo = styled(LinkRouter) `
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
`;
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 3.2rem;
        cursor: pointer;
        color: #6d6d6d;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    /* text-align: left; */
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`


export const NavLinks = styled(LinkScroll) `
    color: #6D6D6D;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 1.6rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 1px solid #6D6D6D;
    }

    /* &:after {
        position: absolute;
        transition: .3s;
        content: '';
        width: 0;
        right: 0;
        left: auto;
        bottom: 0;
        height: 1px;
        background: $color-grey-dark;
    }

    &:hover {

        &:after {
            width: 100%;
            left: 0;
        }
    } */
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavBtnLink = styled(LinkRouter) `
    /*   border-bottom: 1px solid #6d6d6d; */
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: #6d6d6d;
    font-size: 1.6rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover {
        transition: all 0.2s ease-in-out;
        background: #2B2220;
    }
`;