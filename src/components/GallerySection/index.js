import React, { useState } from 'react';
import { ButtonGallery } from '../ButtonElement';
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
                    <GalleryImage src={image1} alt='image1' />
                </GalleryItem>
                <GalleryItem className="item-2">
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
                    <GalleryImage src={image2} alt='image2' />
                </GalleryItem>
                <GalleryItem className="item-5">
                    <GalleryImage src={image3} alt='image3' />
                </GalleryItem>
                <GalleryItem className="item-6">
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
                <GalleryItem className="item-7">
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
                <GalleryItem className="item-8">
                    <GalleryImage src={image4} alt='image4' />
                </GalleryItem>
                <GalleryItem className="item-9">
                    <GalleryImage src={image5} alt='image5' />
                </GalleryItem>
                <GalleryItem className="item-10">
                    <GalleryTextContainer>
                        <GalleryH3 className='galleryApartment'>apartament #5</GalleryH3>
                        <GalleryH4>Apartament w Kołobrzgu, pow. 45 m2</GalleryH4>
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