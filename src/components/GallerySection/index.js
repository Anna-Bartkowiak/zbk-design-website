import React from 'react';
import {
    GalleryContainer,
    GalleryWrapper,
    GalleryH2,
    GalleryGrid,
    GalleryItem
} from './GalleryElements';

export const Gallery = () => {
    return (
        <GalleryContainer id="project">
            <GalleryWrapper>
                <GalleryH2>
                    projekty.
                </GalleryH2>
                <GalleryGrid>
                    <GalleryItem>1</GalleryItem>
                    <GalleryItem>2</GalleryItem>
                    <GalleryItem>3</GalleryItem>
                    <GalleryItem>4</GalleryItem>
                    <GalleryItem>5</GalleryItem>
                    <GalleryItem>6</GalleryItem>
                    <GalleryItem>7</GalleryItem>
                    <GalleryItem>8</GalleryItem>
                </GalleryGrid>
            </GalleryWrapper>
        </GalleryContainer>
    )
}

export default Gallery;