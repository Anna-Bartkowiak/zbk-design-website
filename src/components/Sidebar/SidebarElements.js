import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { VscChromeClose } from 'react-icons/vsc';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    /* height: 100%; */
    background: #fff;
    display: grid;
    /* align-items: center; */
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const SidebarLogo = styled(LinkRouter) `
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    margin-top: 3.2rem;
    margin-left: 3.2rem;
    background-color: transparent;
`;

export const CloseIcon = styled(VscChromeClose) `
    color: #6d6d6d;
    background: transparent;
`;

export const Icon = styled.div`
    position: absolute;
    top: 3.2rem;
    right: 3.2rem;
    background: transparent;
    font-size: 3.2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #6d6d6d;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    background: #fff;
    grid-template-column: 1fr;
    grid-template-rows: repeat(4, 8rem);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 8rem);
    }
`;

export const SidebarLink = styled(LinkScroll) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #6d6d6d;
    background: #fff;
    text-transform: uppercase;
    cursor: pointer;
    border-bottom: 1px solid #6d6d6d;

    &:hover {
        color: #2B2220;
        transition: 0.2s ease-in-out;
    }
`;