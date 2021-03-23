import React from 'react';
import {
    AboutUsContainer,
    AboutUsWrapper,
    AboutUsGrid,
    AboutUsItem,
    AboutUsH2,
    AboutUsH3,
    AboutUsP,
    AboutUsImgWrapper,
    AboutUsImg
} from './AboutUsElements';
import image1 from '../../images/MainGallery/ZuzaBK.jpg';

export const AboutUs = () => {
    return (
        <AboutUsContainer id="aboutUs">
            <AboutUsWrapper>
                <AboutUsGrid>
                    <AboutUsItem className="item-1">
                        <AboutUsH2>o mnie.</AboutUsH2>
                        <AboutUsImgWrapper>
                            <AboutUsImg src={image1} alt='image1' />
                        </AboutUsImgWrapper>
                    </AboutUsItem>
                    <AboutUsItem className="item-2">
                        <AboutUsH3>Zaoszczędź swój czas…</AboutUsH3>
                        <AboutUsP>Dobry projekt to fundament, na którym wspólnie z klientem tworzymy i urządzimy dom lub mieszkanie. Łącząc kreatywne podejście z pełnym wachlarzem oczekiwań klienta, dążymy do kreowania przestrzeni idealnej charakteryzującej się przemyślaną funkcjonalnością, czytelną formą i nowoczesnym stylem.</AboutUsP>
                        <AboutUsP>Wychodząc naprzeciw Twoim oczekiwaniom oferujemy kompleksowy zakres usług, które pozwolą Ci na oszczędność zarówno czasu jak i finansów.</AboutUsP>
                    </AboutUsItem>
                    <AboutUsItem className="item-3">
                        <AboutUsH3>Poznaj naszą pracę….</AboutUsH3>
                        <AboutUsP>Wieloletnie doświadczenie i znajomość światowych trendów w designie pozwala nam na świadczenie kompleksowych usług w zakresie aranżacji i projektowania wnętrz.</AboutUsP>
                        <AboutUsP>Na pierwszym miejscu stawiamy zadowolenie klientów, które jest podstawą do kreowania idealnej przestrzeni służącej potrzebom jej użytkowników.
                        Takie podejście daje możliwość tworzenia wnętrz w pełni funkcjonalnych, nowoczesnych i czytelnych, wnętrz stanowiących odpowiedź na oczekiwania naszych klientów. </AboutUsP>
                    </AboutUsItem>
                </AboutUsGrid>
            </AboutUsWrapper>
        </AboutUsContainer>
    )
}

export default AboutUs;