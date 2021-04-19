import React, { useState } from 'react';
import { ButtonOtherProject } from '../ButtonElement';
import {
    ProjectContainer,
    ProjectHero,
    ProjectH1,
    ProjectH2,
    ProjectWrapper,
    ProjectTextWrapper,
    ProjectP,
    ProjectGallery,
    ProjectGalleryGrid,
    ProjectGalleryItem,
    ProjectGalleryImg,
    ProjectOther,
    ProjectOtherGrid,
    ProjectOtherItem,
    ProjectOtherImg,
    ProjectOtherBtnWrapper,
} from './Project1Elements';
import image1 from '../../images/MainGallery/mainGallery1.jpg';
import image2 from '../../images/MainGallery/7dom8.jpg';
import image3 from '../../images/MainGallery/7dom2.jpg';
import image4 from '../../images/MainGallery/7dom13.jpg';
import image5 from '../../images/MainGallery/7dom9.jpg';
import image6 from '../../images/MainGallery/7dom1.jpg';
import image7 from '../../images/MainGallery/7dom6.jpg';
import image8 from '../../images/MainGallery/7dom7.jpg';
import image9 from '../../images/MainGallery/7dom3.jpg';
import image10 from '../../images/MainGallery/7dom14.jpg';
import image11 from '../../images/MainGallery/7dom5.jpg';
import image12 from '../../images/MainGallery/7dom12.jpg';
import image13 from '../../images/MainGallery/7dom10.jpg';
import image14 from '../../images/MainGallery/7dom11.jpg';
import image15 from '../../images/MainGallery/7dom4.jpg';
import imageOther1 from '../../images/MainGallery/11dom1.jpg';
import imageOther2 from '../../images/MainGallery/flat_35m_MainGallery.jpg';
import imageOther3 from '../../images/MainGallery/house_140m_imgMainGallery.jpg';

const Project1Section = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <ProjectContainer>
            <ProjectHero>
                <ProjectH1>Dom #7</ProjectH1>
                <ProjectH2>Dom w Mierzynie, pow 175 m2</ProjectH2>
                <ProjectWrapper>
                    <ProjectTextWrapper>
                        <ProjectP>Bazę dla aranżacji wnętrz stanowią wysokiej jakości materiały wykończeniowe: dębowy, naturalny fornir, płytki o małych formatach i piękna olejowana drewniana podłoga. Połączenie stonowanej, neutralnej kolorystyki z intrygującymi energetycznymi akcentami <span>ubiera ten salon w stylu skandynawskim</span>. Zgodnie z oczekiwaniami właścicieli powstało ciepłe i  <span>dynamiczne wnętrze w duchu hygge</span>. Na uwagę zasługują fakt że wiele elementów wystroju zostało zaprojektowanych specjalnie na potrzeby tego domu, aby miał on jak najbardziej osobisty i zindywidualizowany charakter.</ProjectP>
                    </ProjectTextWrapper>
                </ProjectWrapper>
            </ProjectHero>
            <ProjectGallery>
                <ProjectGalleryGrid>
                    <ProjectGalleryItem className="item-1">
                        <ProjectGalleryImg
                            src={image1}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-2">
                        <ProjectGalleryImg
                            src={image2}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-3">
                        <ProjectGalleryImg
                            src={image3}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-4">
                        <ProjectGalleryImg
                            src={image4}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-5">
                        <ProjectGalleryImg
                            src={image5}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-6">
                        <ProjectGalleryImg
                            src={image6}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-7">
                        <ProjectGalleryImg
                            src={image7}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-8">
                        <ProjectGalleryImg
                            src={image8}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-9">
                        <ProjectGalleryImg
                            src={image9}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-10">
                        <ProjectGalleryImg
                            src={image10}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-11">
                        <ProjectGalleryImg
                            src={image11}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-12">
                        <ProjectGalleryImg
                            src={image12}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-13">
                        <ProjectGalleryImg
                            src={image13}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-14">
                        <ProjectGalleryImg
                            src={image14}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-15">
                        <ProjectGalleryImg
                            src={image15}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka' />
                    </ProjectGalleryItem>
                </ProjectGalleryGrid>
            </ProjectGallery>
            <ProjectOther id="project">
                <ProjectH1>Inne projekty</ProjectH1>
                <ProjectOtherGrid>
                    <ProjectOtherItem className="item-12">
                        <ProjectOtherImg
                            src={imageOther1}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele,  jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin'
                        />
                        <ProjectOtherBtnWrapper>
                            <ButtonOtherProject
                                to="project2"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                dom #11
                            </ButtonOtherProject>
                        </ProjectOtherBtnWrapper>
                    </ProjectOtherItem>
                    <ProjectOtherItem className="item-13">
                        <ProjectOtherImg src={imageOther2} alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                        <ProjectOtherBtnWrapper>
                            <ButtonOtherProject
                                to="project3"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                apartament #3
                            </ButtonOtherProject>
                        </ProjectOtherBtnWrapper>
                    </ProjectOtherItem>
                    <ProjectOtherItem className="item-14">
                        <ProjectOtherImg src={imageOther3} alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim,czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                        <ProjectOtherBtnWrapper>
                            <ButtonOtherProject
                                to="project4"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                dom #5
                            </ButtonOtherProject>
                        </ProjectOtherBtnWrapper>
                    </ProjectOtherItem>
                </ProjectOtherGrid>
            </ProjectOther>
        </ProjectContainer>
    )
}

export default Project1Section;