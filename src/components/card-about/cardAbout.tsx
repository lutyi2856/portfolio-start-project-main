import React from 'react';
import {Icon} from "../icon/Icon";
import {H3} from "../h3/H3";
import styled from "styled-components";

type CardAboutPropsType = {
    background?: string,
    cardTitle?: string,
    cardIcon?: string,
    iconWidth?: string,
    iconHeight?: string,
    iconViewBox?: string,
}

export const CardAbout = (props:CardAboutPropsType) => {
    return (
        <StyledCardAbout>
            <Icon width={`${props.iconWidth}`} height={`${props.iconHeight}`} viewBox={`${props.iconViewBox}`} iconID={`${props.cardIcon}`}/>
            <H3 text={`${props.cardTitle }`} />
        </StyledCardAbout>
    );
};

const StyledCardAbout = styled.div<CardAboutPropsType>`
background-color: ${props => props.background || '#BDBDBD'};
`