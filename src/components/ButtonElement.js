import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link) `
    background: ${({ primary }) => (primary ? '#D7B975' : '#c08d17')};
    white-space: no-wrap;
    padding: ${({ bigger }) => (bigger ? '1.4rem 2.2rem' : '0.8rem 1rem')};
    color: #fff;
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
        background: ${({ primary }) => (primary ? '#c08d17' : '#D7B975')};
    }
`;