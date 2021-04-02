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
} from './Project2Elements';
import image1 from '../../images/MainGallery/11dom1.jpg';
import image2 from '../../images/MainGallery/11dom2.jpg';
import image3 from '../../images/MainGallery/11dom3.jpg';
import image4 from '../../images/MainGallery/11dom4.jpg';
import image5 from '../../images/MainGallery/11dom5.jpg';
import image6 from '../../images/MainGallery/11dom6.jpg';
import image7 from '../../images/MainGallery/11dom7.jpg';
import image8 from '../../images/MainGallery/11dom8.jpg';
import image9 from '../../images/MainGallery/11dom9.jpg';
import image10 from '../../images/MainGallery/11dom10.jpg';
import image11 from '../../images/MainGallery/11dom11.jpg';
import image12 from '../../images/MainGallery/11dom12.jpg';
import image13 from '../../images/MainGallery/11dom13.jpg';
import image14 from '../../images/MainGallery/11dom14.jpg';
import image15 from '../../images/MainGallery/11dom15.jpg';
import image16 from '../../images/MainGallery/11dom16.jpg';
import image17 from '../../images/MainGallery/11dom17.jpg';
import image18 from '../../images/MainGallery/11dom18.jpg';
import image19 from '../../images/MainGallery/11dom19.jpg';
import image20 from '../../images/MainGallery/11dom20.jpg';
import imageOther1 from '../../images/MainGallery/7dom1.jpg';
import imageOther2 from '../../images/MainGallery/flat_35m_MainGallery.jpg';
import imageOther3 from '../../images/MainGallery/house_140m_imgMainGallery.jpg';

const Project2Section = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <ProjectContainer>
            <ProjectHero>
                <ProjectH1>Dom #11</ProjectH1>
                <ProjectH2>Dom jednorodzinny na przedmieściach Szczecina , pow 140 m2</ProjectH2>
                <ProjectWrapper>
                    <ProjectTextWrapper>
                        <ProjectP>Po <span>analizie potrzeb</span> Inwestorów ustaliliśmy paletę barw w naturalnych odcieniach beżów i szarości oraz listę użytych materiałów. Zaprojektowaliśmy wnętrze w naturalnych materiałach wykończeniowych oddających wrażenie ciepła. Połączyliśmy z charakterystycznym spiekiem o wzorze marmuru oraz <span>złotymi lampami</span>. Inwestorzy zwracają dużą uwagę na oświetlenie, które nie narzuca się w aranżacji jednoczenie nie jest obojętne, ma nowoczesną formę i wysoką jakość. Zastosowano <span>nowoczesne lampy</span> magnetyczne, szynowe zintegrowane z sufitem z możliwością zmiany zastosowanych opraw oświetleniowych. Życzeniem Klientów była efektowna zabudowa ściany telewizyjnej, która byłaby ozdoba salonu. Użyto tu lameli drewnianych i spieku Laminam.</ProjectP>
                    </ProjectTextWrapper>
                </ProjectWrapper>
            </ProjectHero>
            <ProjectGallery>
                <ProjectGalleryGrid>
                    <ProjectGalleryItem className="item-1">
                        <ProjectGalleryImg
                            src={image1}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-2">
                        <ProjectGalleryImg
                            src={image2}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-3">
                        <ProjectGalleryImg 
                            src={image3}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-4">
                        <ProjectGalleryImg
                            src={image4}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-5">
                        <ProjectGalleryImg
                            src={image5}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-6">
                        <ProjectGalleryImg
                            src={image6}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-7">
                        <ProjectGalleryImg
                            src={image7}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-8">
                        <ProjectGalleryImg
                            src={image8}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-9">
                        <ProjectGalleryImg
                            src={image9}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-10">
                        <ProjectGalleryImg
                            src={image10}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-11">
                        <ProjectGalleryImg
                            src={image11}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-12">
                        <ProjectGalleryImg
                            src={image12}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-13">
                        <ProjectGalleryImg
                            src={image13}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-14">
                        <ProjectGalleryImg
                            src={image14}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-15">
                        <ProjectGalleryImg
                            src={image15}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-16">
                        <ProjectGalleryImg
                            src={image16}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-17">
                        <ProjectGalleryImg
                            src={image17}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-18">
                        <ProjectGalleryImg
                            src={image18}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-19">
                        <ProjectGalleryImg
                            src={image19}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
                    </ProjectGalleryItem>
                    <ProjectGalleryItem className="item-20">
                        <ProjectGalleryImg
                            src={image20}
                            alt='nowoczesna łazienka, marmur, spiek Laminam, dekoracyjne lamele, jasny salon, podłoga w jodełkę w salonie, wielkoformatowe płyty w kuchni, marmur w łazience, wolnostojący kominek, projekt wnętrz Szczecin' />
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
                        <ProjectOtherImg src={imageOther2} alt='Boazeria w salonie, styl Hamptons, projekt pod klucz, apartament nad morzem, aneks kuchenny, tapicerowany zagłówek, łóżko kontynentalne w sypialni, granatowy beżowy salon. projekt wnętrz apartamentu na wynajem. wiklinowy żyrandol' />
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
                    <ProjectOtherItem>
                        <ProjectOtherImg src={imageOther3} alt='nowoczesna kuchnia, luksusowy salon, kryształ, projekt wnętrza w stylu nowojorskim,czarne dodatki, sztuka, obraz na ścianie, klasyczne meble, antyczne meble w salonie' />
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

export default Project2Section;