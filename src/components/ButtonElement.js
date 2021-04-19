import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS) `
    background: ${({ primary }) => (primary ? 'var(--fourthColor)' : 'var(--tertiaryColor)')};
    white-space: no-wrap;
    padding: ${({ bigger }) => (bigger ? '1.4rem 2.2rem' : '0.8rem 1rem')};
    color: var(--secondaryColor);
    font-size: ${({ fontbigger }) => (fontbigger ? '1.9rem' : '1.7rem')};
    line-height: 1.9rem;
    font-weight: 300;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({ primary }) => (primary ? 'var(--tertiaryColor)' : 'var(--fourthColor)')};
    }
`

export const ButtonGallery = styled(LinkR) `
    border: 1px solid var(--tertiaryColor);
    white-space: no-wrap;
    padding: 1.4rem 2.2rem;
    font-size: 1.9rem;
    font-family: var(--fontFamilySecondary);
    font-weight: 300;
    outline: none;
    cursor: pointer;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: var(--fontColor);

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

export const ButtonOtherProject = styled(LinkR) `
    border: 1px solid var(--fontColor);
    white-space: no-wrap;
    padding: 1.4rem 2.2rem;
    width: 100%;
    font-size: 1.9rem;
    font-family: var(--fontFamilySecondary);
    font-weight: 300;
    outline: none;
    cursor: pointer;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    margin-top: 3rem;
    margin-bottom: 4rem;
    text-decoration: none;
    color: var(--fontColor);

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({ primary }) => (primary ? 'var(--fontColor)' : 'var(--fourthColor)')};
        color: var(--secondaryColor);
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 1.4rem;
        font-size: 1.6rem;
        margin-top: 0;
    }
`