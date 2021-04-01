import React, { useState } from 'react';
import { ButtonGallery } from '../ButtonElement';
import { Link } from 'react-router-dom';
import {
    GalleryContainer,
    GalleryH2,
    GalleryGrid,
    GalleryItem,
    GalleryImage,
    GalleryTextContainer,
    GalleryH3,
    GalleryH4,
    GalleryP,
    GalleryBtnWrapper,
    ArrowRight,
    ArrowLeft
} from './GalleryElements';
import image1 from '../../images/MainGallery/mainGallery1.jpg';
import image2 from '../../images/MainGallery/mainGallery.jpg';
import image3 from '../../images/MainGallery/house_140m_imgMainGallery.jpg';
import image4 from '../../images/MainGallery/flat_65m_MainGallery.jpg';
import image5 from '../../images/MainGallery/flat_35m_MainGallery.jpg';

export const Gallery = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <GalleryContainer id="project">
            <GalleryH2>
                projekty.
                </GalleryH2>
            <GalleryGrid>
                <GalleryItem className="item-1">
                    <GalleryImage src={image1} alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                </GalleryItem>
                <GalleryItem className="item-2">
                    <GalleryTextContainer>
                        <GalleryH3>dom #7</GalleryH3>
                        <GalleryH4>Dom w Mierzynie, pow. 175 m2</GalleryH4>
                        <GalleryP>Bazę dla aranżacji wnętrz stanowią wysokiej jakości materiały wykończeniowe: dębowy, naturalny fornir , płytki o małych formatach i piękna olejowana drewniana podłoga. Połączenie stonowanej, neutralnej...</GalleryP>
                        <GalleryBtnWrapper>
                            <ButtonGallery
                                to='project1'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                <ArrowLeft />
                                galeria
                            </ButtonGallery>
                        </GalleryBtnWrapper>
                    </GalleryTextContainer>
                </GalleryItem>
                <GalleryItem className="item-3">
                    <GalleryTextContainer>
                        <GalleryH3>dom #11</GalleryH3>
                        <GalleryH4>Dom jednorodzinny na przedmieściach Szczecina, pow. 140 m2</GalleryH4>
                        <GalleryP>Po analizie potrzeb Inwestorów ustaliliśmy paletę barw w naturalnych odcieniach beżów i szarości oraz listę użytych materiałów. Zaprojektowaliśmy wnętrze w naturalnych materiałach wykończeniowych oddających wrażenie ciepła...</GalleryP>
                        <GalleryBtnWrapper>
                            <ButtonGallery
                                to='project'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                galeria
                                <ArrowRight />
                            </ButtonGallery>
                        </GalleryBtnWrapper>
                    </GalleryTextContainer>
                </GalleryItem>
                <GalleryItem className="item-4">
                    <GalleryImage src={image2} alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele,  jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                </GalleryItem>
                <GalleryItem className="item-5">
                    <GalleryImage src={image5} alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem, wiklinowy żyrandol' />
                </GalleryItem>
                <GalleryItem className="item-6">
                    <GalleryTextContainer>
                        <GalleryH3 className='galleryApartment'>apartament #3</GalleryH3>
                        <GalleryH4>Apartament w Kołobrzgu, pow. 36 m2</GalleryH4>
                        <GalleryP>Projekt wnętrza zrealizowano w opcji pod klucz. Nadmorski klimat mieszkania z nutą zauważalnego luksusu, osiągnięcie takiego efektu wnętrza przyświecało projektantowi tego apartamentu w Kołobrzegu...</GalleryP>
                        <GalleryBtnWrapper>
                            <ButtonGallery
                                to='project'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                <ArrowLeft />
                                galeria
                            </ButtonGallery>
                        </GalleryBtnWrapper>
                    </GalleryTextContainer>
                </GalleryItem>
                <GalleryItem className="item-7">
                    <GalleryTextContainer>
                        <GalleryH3>dom #5</GalleryH3>
                        <GalleryH4>Dom w Mierzynie, pow. 175 m2</GalleryH4>
                        <GalleryP>W zaprojektowanym przez Zuzannę B. Kałuc domu harmonijnie przenika się to, co nowoczesne z klasyką, a sztuka i funkcjonalność tworzą niezwykłe połączenie. Aranżacja wnętrz w stylu nowojorskim oparta została o...</GalleryP>
                        <GalleryBtnWrapper>
                            <ButtonGallery
                                to='project'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                galeria
                                <ArrowRight />
                            </ButtonGallery>
                        </GalleryBtnWrapper>
                    </GalleryTextContainer>
                </GalleryItem>
                <GalleryItem className="item-8">
                    <GalleryImage src={image4} alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim, czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                </GalleryItem>
                <GalleryItem className="item-9">
                    <GalleryImage src={image3} alt='image3' />
                </GalleryItem>
                <GalleryItem className="item-10">
                    <GalleryTextContainer>
                        <GalleryH3>dom #8</GalleryH3>
                        <GalleryH4>dom jednorodzinny w mierzynie, pow. 140 m2</GalleryH4>
                        <GalleryP>Po analizie potrzeb Inwestorów ustaliliśmy paletę barw w naturalnych odcieniach beżów i szarości oraz listę użytych materiałów. Zaprojektowaliśmy wnętrze w naturalnych materiałach wykończeniowych oddających wrażenie ciepła...</GalleryP>
                        <GalleryBtnWrapper>
                            <ButtonGallery
                                to='project'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                <ArrowLeft />
                                galeria
                            </ButtonGallery>
                        </GalleryBtnWrapper>
                    </GalleryTextContainer>
                </GalleryItem>
            </GalleryGrid>
        </GalleryContainer>
    )
}

export default Gallery;