import styled from 'styled-components';
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

export const OfferContainer = styled.div`
    max-width: 140rem;
    margin: 12rem auto;
    border: 1px solid var(--fontColor);

    @media screen and (max-width: 1000px) {
        margin: 10rem auto;
        /* padding: 4rem 0; */
    }

    @media screen and (max-width: 576px) {
        margin: 6rem auto;
    }
`

export const OfferTextWrapper = styled.div`
    max-width: 110rem;
    width: 100%;
    margin: 0 auto;
    padding: 8rem 12rem;

    @media screen and (max-width: 1000px) {
        padding: 6rem 8rem;
    }

    @media screen and (max-width: 768px) {
        padding: 6rem;
    }

    @media screen and (max-width: 400px) {
        padding: 4rem 3rem;
    }
`

export const OfferH2 = styled.h2`
    font-size: 8rem;
    line-height: 8rem;
    font-family: 'Unica One', sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;

    @media screen and (max-width: 1000px) {
        font-size: 5.8rem;
        line-height: 6.8rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 4.8rem;
        line-height: 5.8rem;
        text-align: center;
    }
`

export const OfferH3 = styled.h3`
    font-size: 2.6rem;
    line-height: 2.8rem;
    padding: 1rem 0;
    font-family: 'Unica One', sans-serif;
    margin-bottom: 1rem;

    @media screen and (max-width: 1000px) {
        font-size: 2rem;
        line-height: 2.2rem;
        padding: .7rem 0;
        margin-bottom: .7rem;
    }

    /* @media screen and (max-width: 580px) {
        font-size: 2.2rem;
    } */
`

export const OfferP = styled.p`
    font-family: 'Oswald', cursive;
    font-size: 1.8rem;
    line-height: 2.8rem;

    &:not(:last-child) {
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 1000px) {
        font-size: 1.6rem;
        line-height: 2.2rem;

        &:not(:last-child) {
            padding-bottom: 1.3rem;
        }
    }
`

export const OfferTabWrapper = styled.div`
    max-width: 110rem;
    /* min-height: 50rem; */
    width: 100%;
    margin: 0 auto;
    padding: 0 12rem 12rem;

    @media screen and (max-width: 1000px) {
        padding: 0 8rem 8rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0 6rem 6rem;
    }

    @media screen and (max-width: 576px) {
        padding: 0;
        padding-bottom: 6rem;
    }
`

export const OfferTab = styled(Tab) `
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--tertiaryColor);
    white-space: no-wrap;
    padding: 1.6rem 2.6rem;
    color: var(--primaryColor);
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    font-family: 'Oswald';
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:not(:last-child) {
        margin-right: .3rem;
    }

    &.active {
        background: var(--fontColor);
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        background: var(--fontColor);
    }

    @media screen and (max-width: 1000px) {
        padding: 1.2rem 2rem;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 1.6rem;
        font-size: 1.4rem;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
        padding: 1.4rem 1.6rem;
        font-weight: 400;

        &:not(:last-child) {
            margin-right: .1rem;
        }
    }
`

export const OfferTabList = styled(TabList) `
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 576px) {
        justify-content: center;
    }
`

export const OfferTabs = styled(Tabs) `
`

export const OfferTabPanel = styled(TabPanel) `
`

export const OfferPWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 44.2rem;
    padding: 5rem;
    background-color: var(--secondaryColor);

    @media screen and (max-width: 1000px) {
        min-height: 36rem;
        padding: 4rem;
    }

    @media screen and (max-width: 576px) {
        padding: 3rem;
    }
`

export const OfferH3Grid = styled.h3`
    font-size: 3.6rem;
    line-height: 4.8rem;
    padding: 1rem 0;
    font-family: 'Unica One', sans-serif;
    margin-bottom: 1rem;
    text-align: center;

    @media screen and (max-width: 576px) {
        font-size: 3rem;
        line-height: 3.8rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 2.6rem;
        line-height: 3.4rem;
    }
`

export const OfferGrid = styled.div`
    width: 100%;
    max-width: 110rem;
    margin: 0 auto;
    padding: 8rem 12rem;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        padding: 4rem 6rem;
    }

    @media screen and (max-width: 576px) {
        padding: 4rem 2rem;
    }
`

export const OfferGridItem = styled.div`
    margin-bottom: 4rem;

    &:first-child,
    :nth-child(4),
    :nth-child(5),
    :nth-child(8),
    :nth-child(9),
    :nth-child(12),
    :nth-child(13),
    :nth-child(16),
    :nth-child(17) {
        flex-basis: 25%;
    }

    &:last-child,
    :nth-child(2),
    :nth-child(3),
    :nth-child(6),
    :nth-child(7),
    :nth-child(10),
    :nth-child(11),
    :nth-child(14),
    :nth-child(15) {
        flex-basis: 75%;
    }

    @media screen and (max-width: 768px) {
        &:first-child,
        :nth-child(4),
        :nth-child(5),
        :nth-child(8),
        :nth-child(9),
        :nth-child(12),
        :nth-child(13),
        :nth-child(16),
        :nth-child(17),
        :last-child,
        :nth-child(2),
        :nth-child(3),
        :nth-child(6),
        :nth-child(7),
        :nth-child(10),
        :nth-child(11),
        :nth-child(14),
        :nth-child(15) {
            flex-basis: 100%;
        }

        &:nth-child(3) {
            order: 4;
        }
        :nth-child(4) {
            order: 3;
        }
        :nth-child(5) {
            order: 5;
        }
        :nth-child(6) {
            order: 6;
        }
        :nth-child(7) {
            order: 8;
        }
        :nth-child(8) {
            order: 7;
        }
        :nth-child(9) {
            order: 9;
        }
        :nth-child(10) {
            order: 10;
        }
        :nth-child(11) {
            order: 12;
        }
        :nth-child(12) {
            order: 11;
        }
        :nth-child(13) {
            order: 13;
        }
        :nth-child(14) {
            order: 14;
        }
        :nth-child(15) {
            order: 16;
        }
        :nth-child(16) {
            order: 15;
        }
        :nth-child(17) {
            order: 17;
        }
        &:last-child {
            order:18;
        }
    }

    @media screen and (max-width: 576px) {
        margin-bottom: 2.5rem;
    }
`

export const OfferGridNumber = styled.div`
    font-size: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: var(--fourthColor);
    border: 1px dotted var(--fourthColor);

    @media screen and (max-width: 576px) {
        font-size: 7rem;
    }
`

export const OfferGridP = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-family: 'Oswald',cursive;
    font-size: 1.8rem;
    line-height: 2.8rem;
    border: 1px solid var(--fourthColor);
    padding: 3rem 5rem;

    span {
        color: var(--fourthColor);
        font-family: 'Unica One',sans-serif;
        font-size: 3.5rem;
        line-height: 4.5rem;
        text-transform: uppercase;
        font-weight: 900;
    }

    @media screen and (max-width: 576px) {
        padding: 3rem 3rem;
        font-size: 1.5rem;
        line-height: 2.4rem;
        font-weight: 400;

        span {
            font-size: 3rem;
            line-height: 4rem;
        }
    }
`