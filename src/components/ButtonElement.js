import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link) `

    /* background: ${({ primary }) => (primary ? 'linear-gradient(90deg, rgba(215,185,117,1) 0%, rgba(193,142,26,1) 100%, rgba(192,141,23,0.02910052910052907) 100%)' : 'linear-gradient(90deg, rgba(193,142,26,1) 0%, rgba(215,185,117,1) 100%, rgba(192,141,23,0.02910052910052907) 100%)')}; */

    background: ${({ primary }) => (primary ? '#D7B975' : '#c08d17')};
    white-space: no-wrap;
    padding: ${({ bigger }) => (bigger ? '1.4rem 2.2rem' : '0.8rem 1rem')};
    color: #fff;
    font-size: ${({ fontBigger }) => (fontBigger ? '1.9rem' : '1.7rem')};
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