import React from 'react';
// import React, { useState } from 'react';
// import { Button } from '../ButtonElement';
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
    ProjectOtherImg
    // HeroBtnWrapper,
    // ArrowRight,
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

const Project1Section = () => {
    return (
        <ProjectContainer>
            <ProjectHero>
                <ProjectH1>Dom #7</ProjectH1>
                <ProjectH2>Dom w Mierzynie, pow 175 m2</ProjectH2>
                <ProjectWrapper>
                    <ProjectTextWrapper>
                        <ProjectP>Bazę dla aranżacji wnętrz stanowią wysokiej jakości materiały wykończeniowe: dębowy, naturalny fornir , płytki o małych formatach i piękna olejowana drewniana podłoga. Połączenie stonowanej, neutralnej kolorystyki z intrygującymi energetycznymi akcentami <span>ubiera ten salon w stylu skandynawskim</span>. Zgodnie z oczekiwaniami właścicieli powstało ciepłe i  <span>dynamiczne wnętrze w duchu hygge</span>. Na uwagę zasługują fakt że wiele elementów wystroju zostało zaprojektowanych specjalnie na potrzeby tego domu, aby miał on jak najbardziej osobisty i zindywidualizowany charakter.</ProjectP>
                    </ProjectTextWrapper>
                </ProjectWrapper>
                {/* <HeroBtnWrapper>
                    <Button
                        to='project'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        bigger="true"
                        fontbigger="true">
                        Przemyślane i użytkowe projekty
                        <ArrowRight />
                    </Button>
                </HeroBtnWrapper> */}
            </ProjectHero>
            <ProjectGallery>
                <ProjectGalleryGrid>
                    <ProjectGalleryItem className="item-1">
                        <ProjectGalleryImg src={image1} alt='image1' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-2">
                        <ProjectGalleryImg src={image2} alt='image2' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-3">
                        <ProjectGalleryImg src={image3} alt='image3' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-4">
                        <ProjectGalleryImg src={image4} alt='image4' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-5">
                        <ProjectGalleryImg src={image5} alt='image5' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-6">
                        <ProjectGalleryImg src={image6} alt='image6' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-7">
                        <ProjectGalleryImg src={image7} alt='image7' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-8">
                        <ProjectGalleryImg src={image8} alt='image8' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-9">
                        <ProjectGalleryImg src={image9} alt='image9' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-10">
                        <ProjectGalleryImg src={image10} alt='image10' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-11">
                        <ProjectGalleryImg src={image11} alt='image11' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-12">
                        <ProjectGalleryImg src={image12} alt='image12' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-13">
                        <ProjectGalleryImg src={image13} alt='image13' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-14">
                        <ProjectGalleryImg src={image14} alt='image14' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-15">
                        <ProjectGalleryImg src={image15} alt='image15' />
                    </ProjectGalleryItem>
                </ProjectGalleryGrid>
            </ProjectGallery>
            <ProjectOther id="project">
                <ProjectH1>Inne projekty</ProjectH1>
                <ProjectOtherGrid>
                    <ProjectOtherItem className="item-12">
                        <ProjectOtherImg src={image12} alt='image12' />
                    </ProjectOtherItem>
                    <ProjectOtherItem className="item-13">
                        <ProjectOtherImg src={image13} alt='image13' />
                    </ProjectOtherItem>
                    <ProjectOtherItem className="item-14">
                        <ProjectOtherImg src={image14} alt='image14' />
                    </ProjectOtherItem>
                    <ProjectOtherItem className="item-15">
                        <ProjectOtherImg src={image15} alt='image15' />
                    </ProjectOtherItem>
                </ProjectOtherGrid>
            </ProjectOther>
        </ProjectContainer>
    )
}

export default Project1Section;