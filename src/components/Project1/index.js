import React from 'react';
// import React, { useState } from 'react';
// import { Button } from '../ButtonElement';
import {
    Project1Container,
    Project1Hero,
    Project1H1,
    Project1H2,
    Project1Wrapper,
    // Project1HeroItem,
    // Project1HeroImg,
    Project1TextWrapper,
    Project1P,
    Project1Gallery,
    Project1GalleryGrid,
    Project1GalleryItem,
    Project1GalleryImg
    // Project1Span,
    // HeroBtnWrapper,
    // ArrowRight,
} from './Project1Elements';
import image1 from '../../images/MainGallery/mainGallery1.jpg';
import image2 from '../../images/MainGallery/11dom8.jpg';
import image3 from '../../images/MainGallery/11dom2.jpg';
import image4 from '../../images/MainGallery/11dom13.jpg';
import image5 from '../../images/MainGallery/11dom9.jpg';
import image6 from '../../images/MainGallery/11dom1.jpg';
import image7 from '../../images/MainGallery/11dom6.jpg';
import image8 from '../../images/MainGallery/11dom7.jpg';
import image9 from '../../images/MainGallery/11dom3.jpg';
import image10 from '../../images/MainGallery/11dom14.jpg';
import image11 from '../../images/MainGallery/11dom5.jpg';
import image12 from '../../images/MainGallery/11dom12.jpg';
import image13 from '../../images/MainGallery/11dom10.jpg';
import image14 from '../../images/MainGallery/11dom11.jpg';
import image15 from '../../images/MainGallery/11dom4.jpg';

const Project1Section = () => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // };

    return (
        <Project1Container id="#">
            <Project1Hero>
                <Project1H1>Dom #11</Project1H1>
                <Project1H2>Dom jednorodzinny na przedmieściach Szczecina , pow 140 m2</Project1H2>
                <Project1Wrapper>
                    <Project1TextWrapper>
                        <Project1P>Po analizie potrzeb Inwestorów ustaliliśmy paletę barw w naturalnych odcieniach beżów i szarości oraz listę użytych materiałów. Zaprojektowaliśmy wnętrze w naturalnych materiałach wykończeniowych oddających wrażenie ciepła. Połączyliśmy z charakterystycznym spiekiem o wzorze marmuru oraz złotymi lampami. Inwestorzy zwracają dużą uwagę na oświetlenie, które nie narzuca się w aranżacji jednoczenie nie jest obojętne, ma nowoczesną formę i wysoką jakość. Zastosowano lampy magnetyczne, szynowe zintegrowane z sufitem z możliwością zmiany zastosowanych opraw oświetleniowych. Życzeniem Klientów była efektowna zabudowa ściany telewizyjnej, która byłaby ozdoba salonu.</Project1P>
                    </Project1TextWrapper>
                    {/* <Project1HeroItem>
                        <Project1HeroImg src={image1} alt='image1' />
                    </Project1HeroItem> */}
                </Project1Wrapper>
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
            </Project1Hero>
            <Project1Gallery>
                <Project1GalleryGrid>
                    <Project1GalleryItem className="item-1">
                        <Project1GalleryImg src={image1} alt='image1' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-2">
                        <Project1GalleryImg src={image2} alt='image2' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-3">
                        <Project1GalleryImg src={image3} alt='image3' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-4">
                        <Project1GalleryImg src={image4} alt='image4' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-5">
                        <Project1GalleryImg src={image5} alt='image5' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-6">
                        <Project1GalleryImg src={image6} alt='image6' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-7">
                        <Project1GalleryImg src={image7} alt='image7' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-8">
                        <Project1GalleryImg src={image8} alt='image8' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-9">
                        <Project1GalleryImg src={image9} alt='image9' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-10">
                        <Project1GalleryImg src={image10} alt='image10' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-11">
                        <Project1GalleryImg src={image11} alt='image11' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-12">
                        <Project1GalleryImg src={image12} alt='image12' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-13">
                        <Project1GalleryImg src={image13} alt='image13' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-14">
                        <Project1GalleryImg src={image14} alt='image14' />
                    </Project1GalleryItem>
                    <Project1GalleryItem className="item-15">
                        <Project1GalleryImg src={image15} alt='image15' />
                    </Project1GalleryItem>
                </Project1GalleryGrid>
            </Project1Gallery>
        </Project1Container>
    )
}

export default Project1Section;