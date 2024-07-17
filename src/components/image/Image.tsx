import React from 'react';
import styled, {css} from "styled-components";


type ImagePropsType = {
    src?: string
    alt?: string
    width?: string
    height?: string
    typeImg?: string
    srcSet?: string
}

type StyledImagePropsType = {
    typeImg?: string
}

export const Image = (props: ImagePropsType) => {
    return (
        <StyledImage width={props.width} height={props.height} src={props.src} alt={props.alt}
                     typeImg={`${props.typeImg}`} srcSet={props.srcSet}/>
    );
};

export const StyledImage = styled.img<StyledImagePropsType>`
    ${props => props.typeImg === 'decoretion' && css<StyledImagePropsType>`
        position: absolute;
        z-index: 2;
        top: -80px;
        left: 34px;
    `}
`