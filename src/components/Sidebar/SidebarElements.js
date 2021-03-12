import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { VscChromeClose } from 'react-icons/vsc';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--primaryColor);
    align-items: center;
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
    margin-top: 1rem;
    margin-left: 1rem;
    color: var(--fontColor);
    background-color: transparent;
    width: 20rem;
`;
export const SidebarIcon = styled.img`
    width: 100%;
    height: 100%;
`

export const CloseIcon = styled(VscChromeClose) `
    color: var(--fontColor);
    background: transparent;
`;

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    font-size: 3.2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: var(--fontColor);
`;

export const SidebarMenu = styled.ul`
    display: grid;
    background: var(--primaryColor);
    grid-template-column: 1fr;
    grid-template-rows: repeat(4, 10rem);
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
    color: var(--fontColor);
    background: var(--primaryColor);
    text-transform: uppercase;
    cursor: pointer;
    background: linear-gradient(to bottom, var(--tertiaryColor) 0%, var(--tertiaryColor) 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 3px 1px;
    transition: background-size .2s;

    &:hover {
        background-size: 3px 10px;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkRouter) `
    background: ${({ primary }) => (primary ? 'var(--fontColor)' : 'var(--fourthColor)')};
    white-space: no-wrap;
    padding: ${({ bigger }) => (bigger ? '1.4rem 2.2rem' : '0.8rem 1rem')};
    color: var(--primaryColor);
    font-size: ${({ fontbigger }) => (fontbigger ? '1.9rem' : '1.7rem')};
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--primaryColor);
    font-size: 1.6rem;
    font-family: 'Oswald';
    font-weight: 300;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? 'var(--fontColor)' : 'var(--fourthColor)')};
    }
`