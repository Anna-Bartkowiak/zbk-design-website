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
} from './Project3Elements';
import image1 from '../../images/MainGallery/3apartament1.jpg';
import image2 from '../../images/MainGallery/3apartament2.jpg';
import image3 from '../../images/MainGallery/3apartament3.jpg';
import image4 from '../../images/MainGallery/3apartament4.jpg';
import image5 from '../../images/MainGallery/3apartament5.jpg';
import image6 from '../../images/MainGallery/3apartament6.jpg';
import image7 from '../../images/MainGallery/3apartament7.jpg';
import imageOther1 from '../../images/MainGallery/7dom1.jpg';
import imageOther2 from '../../images/MainGallery/mainGallery.jpg';
import imageOther3 from '../../images/MainGallery/house_140m_imgMainGallery.jpg';

const Project3Section = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <ProjectContainer>
            <ProjectHero>
                <ProjectH1>Apartament #3</ProjectH1>
                <ProjectH2>Dom jednorodzinny na przedmieściach Szczecina, pow 36 m2</ProjectH2>
                <ProjectWrapper>
                    <ProjectTextWrapper>
                        <ProjectP><span>Projekt wnętrza</span> zrealizowano w opcji <span>pod klucz</span>. Nadmorski klimat mieszkania z nutą zauważalnego luksusu, osiągnięcie takiego efektu wnętrza przyświecało projektantowi tego <span>apartamentu w Kołobrzegu</span>. Esencją stylu są kolory zaciągnięte z palety barw plaży - przytłumione, rozbielone i rozmyte błękity, biel piany morskiej piaskowe beże w zestawieniu z kontrastującym żywego granatem. Grafika nad kanapą oraz chromowe dodatki akcentują charakter wnętrza. <span>Hamptons</span> to styl w którym wygoda jest kluczowa podobnie jak symetria w ustawieniu elementów wystroju i klasyczny wygląd mebli. Ważny jest komfort i design. Obszerna kanapa, duże <span>kontynentalne łóżko</span> służą relaksowi. Tekstury <span>boazerii</span>, dużych poduszek, wiklinowego żyrandolu oraz jutowego dywanu dodają trójwymiarowości aranżacji.</ProjectP>
                    </ProjectTextWrapper>
                </ProjectWrapper>
            </ProjectHero>
            <ProjectGallery>
                <ProjectGalleryGrid>
                    <ProjectGalleryItem className="item-1">
                        <ProjectGalleryImg
                            src={image1}
                            alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-2">
                        <ProjectGalleryImg
                            src={image2}
                            alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-3">
                        <ProjectGalleryImg
                            src={image3}
                            alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-4">
                        <ProjectGalleryImg
                            src={image4}
                            alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-5">
                        <ProjectGalleryImg
                            src={image5}
                            alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-6">
                        <ProjectGalleryImg
                            src={image6}
                            alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-7">
                        <ProjectGalleryImg
                            src={image7}
                            alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                    </ProjectGalleryItem>
                </ProjectGalleryGrid>
            </ProjectGallery>
            <ProjectOther id="project">
                <ProjectH1>Inne projekty</ProjectH1>
                <ProjectOtherGrid>
                    <ProjectOtherItem>
                        <ProjectOtherImg
                            src={imageOther1}
                            alt='dom w stylu skandynawskim, salon z drewnianą zabudową, czarna lampa w jadalni,kuchnia w heksagony, jodełka na ścianie, czarno biała łazienka'
                        />
                        <ProjectOtherBtnWrapper>
                            <ButtonOtherProject
                                to="project1"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                dom #7
                            </ButtonOtherProject>
                        </ProjectOtherBtnWrapper>
                    </ProjectOtherItem>
                    <ProjectOtherItem>
                        <ProjectOtherImg
                            src={imageOther2}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele,  jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                        <ProjectOtherBtnWrapper>
                            <ButtonOtherProject
                                to='project2'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                dom #11
                            </ButtonOtherProject>
                        </ProjectOtherBtnWrapper>
                    </ProjectOtherItem>
                    <ProjectOtherItem>
                        <ProjectOtherImg
                            src={imageOther3}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim,czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                        <ProjectOtherBtnWrapper>
                            <ButtonOtherProject
                                to='project4'
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

export default Project3Section;