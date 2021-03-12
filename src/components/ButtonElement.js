import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link) `
    background: ${({ primary }) => (primary ? 'var(--fourthColor)' : 'var(--tertiaryColor)')};
    white-space: no-wrap;
    padding: ${({ bigger }) => (bigger ? '1.4rem 2.2rem' : '0.8rem 1rem')};
    color: var(--secondaryColor);
    font-size: ${({ fontbigger }) => (fontbigger ? '1.9rem' : '1.7rem')};
    font-family: 'Oswald';
    font-weight: 300;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({ primary }) => (primary ? 'var(--tertiaryColor)' : 'var(--fourthColor)')};
    }
`

export const ButtonGallery = styled(Link) `
    border: 1px solid var(--tertiaryColor);
    white-space: no-wrap;
    padding: 1.4rem 2.2rem;
    /* padding: ${({ bigger }) => (bigger ? '1.4rem 2.2rem' : '0.8rem 1rem')}; */
    font-size: 1.9rem;
    /* font-size: ${({ fontbigger }) => (fontbigger ? '1.9rem' : '1.7rem')}; */
    font-family: 'Unica One';
    font-weight: 300;
    outline: none;
    cursor: pointer;
    display: inline-block;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({ primary }) => (primary ? 'var(--tertiaryColor)' : 'var(--fourthColor)')};
        color: var(--secondaryColor);
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 1.4rem;
        font-size: 1.6rem;
    }
`