import React, { useState } from 'react';
import { ButtonGallery } from '../ButtonElement';
import {
    GalleryContainer,
    GalleryWrapper,
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
            <GalleryWrapper>
                <GalleryH2>
                    projekty.
                </GalleryH2>
                <GalleryGrid>
                    <GalleryItem>
                        <GalleryImage src={image1} alt='image1' />
                    </GalleryItem>
                    <GalleryItem>
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
                    <GalleryItem>
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
                    <GalleryItem>
                        <GalleryImage src={image2} alt='image2' />
                    </GalleryItem>
                    <GalleryItem>
                        <GalleryImage src={image3} alt='image3' />
                    </GalleryItem>
                    <GalleryItem>
                        <GalleryTextContainer>
                            <GalleryH3>dom #8</GalleryH3>
                            <GalleryH4>dom w mierzynie, pow. 140 m2</GalleryH4>
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
                    <GalleryItem>
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
                    <GalleryItem>
                        <GalleryImage src={image4} alt='image4' />
                    </GalleryItem>
                    <GalleryItem>
                        <GalleryImage src={image5} alt='image5' />
                    </GalleryItem>
                    <GalleryItem>
                        <GalleryTextContainer>
                            <GalleryH3 className='galleryApartment'>apartament #5</GalleryH3>
                            <GalleryH4>Apartament w Kołobrzgu, pow. 140 m2</GalleryH4>
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
            </GalleryWrapper>
        </GalleryContainer>
    )
}

export default Gallery;