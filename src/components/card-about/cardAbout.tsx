import React from 'react';
import {Icon} from "../icon/Icon";
import {H3} from "../h3/H3";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type CardAboutPropsType = {
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
background-color:  #BDBDBD;
    display: flex;
    min-height: 256px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0 24px 24px 24px;
    &:hover {
        background-color: ${theme.colors.accent};
    }
    svg {
        margin: 0 0 14px 0;
    }
`