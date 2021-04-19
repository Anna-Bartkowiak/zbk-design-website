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
} from './Project4Elements';
import image1 from '../../images/MainGallery/5dom1.jpg';
import image2 from '../../images/MainGallery/5dom2.jpg';
import image3 from '../../images/MainGallery/5dom3.jpg';
import image4 from '../../images/MainGallery/5dom4.jpg';
import image5 from '../../images/MainGallery/5dom5.jpg';
import image6 from '../../images/MainGallery/5dom6.jpg';
import image7 from '../../images/MainGallery/5dom7.jpg';
import image8 from '../../images/MainGallery/5dom8.jpg';
import image9 from '../../images/MainGallery/5dom9.jpg';
import image10 from '../../images/MainGallery/5dom10.jpg';
import imageOther1 from '../../images/MainGallery/7dom1.jpg';
import imageOther2 from '../../images/MainGallery/mainGallery.jpg';
import imageOther3 from '../../images/MainGallery/flat_35m_MainGallery.jpg';

const Project4Section = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <ProjectContainer>
            <ProjectHero>
                <ProjectH1>Dom #5</ProjectH1>
                <ProjectH2>Dom jednorodzinny na przedmieściach Szczecina, pow 175 m2</ProjectH2>
                <ProjectWrapper>
                    <ProjectTextWrapper>
                        <ProjectP>W zaprojektowanym przez Zuzannę B. Kałuc domu harmonijnie przenika się to, co nowoczesne z klasyką, a sztuka i funkcjonalność tworzą niezwykłe połączenie. <span>Aranżacja wnętrz</span> w <span>stylu nowojorskim</span> oparta została o naturalne surowce (kamień, drewno, jedwab, skóra), miękkie, organiczne linie mebli, oświetlenia i dekoracji. <span>Luksusowy salon</span> ubrany jest w paletę barw w kolorach ziemi (beżu, szarości, brązów, grafitów). <span>Elegancka</span> i ponadczasowa <span>kuchnia</span> w odcieniach rozmytej szarości, beżach oraz elementy nasyconej czerni. Minimalistyczna forma mebli jest tłem dla gwiazdy tej przestrzeni : ikony designu, kryształowego okapu marki Elica. Stylowa konsola Eicholtz i czarno-biała skrzynia świetnie wpisuje się w nowojorski klimat pomieszczenia i  przyciąga wzrok od wejścia do domu. Z kolei o ciepły charakter wnętrza dbają <span>elegancki kominek</span> oraz wysokie lampy stojące na antycznej komodzie odnowionej przez architektkę.</ProjectP>
                    </ProjectTextWrapper>
                </ProjectWrapper>
            </ProjectHero>
            <ProjectGallery>
                <ProjectGalleryGrid>
                    <ProjectGalleryItem className="item-1">
                        <ProjectGalleryImg
                            src={image1}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim,
                            czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-2">
                        <ProjectGalleryImg
                            src={image2}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim,
                            czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-3">
                        <ProjectGalleryImg
                            src={image3}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim,
                            czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-4">
                        <ProjectGalleryImg
                            src={image4}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim,
                            czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-5">
                        <ProjectGalleryImg
                            src={image5}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim, czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-6">
                        <ProjectGalleryImg
                            src={image6}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim, czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-7">
                        <ProjectGalleryImg
                            src={image7}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim, czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-8">
                        <ProjectGalleryImg
                            src={image8}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim, czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-9">
                        <ProjectGalleryImg
                            src={image9}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim, czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-10">
                        <ProjectGalleryImg
                            src={image10}
                            alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim, czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
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
                            alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
                        <ProjectOtherBtnWrapper>
                            <ButtonOtherProject
                                to='project3'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                bigger="true"
                                fontbigger="true">
                                apartament #3
                            </ButtonOtherProject>
                        </ProjectOtherBtnWrapper>
                    </ProjectOtherItem>
                </ProjectOtherGrid>
            </ProjectOther>
        </ProjectContainer>
    )
}

export default Project4Section;