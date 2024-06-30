import React from 'react';
import {Icon} from "../icon/Icon";
import {H3} from "../h3/H3";
import {Text} from "../text/Text";
import styled from "styled-components";

type CardServicePropsType = {
    background?: string,
    cardTitle?: string,
    descrption?: string,
    cardIcon?: string,
    iconWidth?: string,
    iconHeight?: string,
    iconViewBox?: string,
    borderColor?: string

}

export const CardService = (props:CardServicePropsType) => {
    return (
        <StyledCardService>
            <Icon width={`${props.iconWidth}`} height={`${props.iconHeight}`} viewBox={`${props.iconViewBox}`} iconID={`${props.cardIcon}`} />
            <H3 text={`${props.cardTitle }`} />
            <Text text={`${props.descrption }`}/>
        </StyledCardService>
    );
};

const StyledCardService = styled.div<CardServicePropsType>`
    min-height: 338px;
display: flex;
flex-direction: column;
    align-items: center;
background-color: transparent;
    padding: 0 20px 0 20px;
border-radius: 16px;
    padding-top: 60px;
    &:nth-child(even) {
        border: 3px solid #fff;
    }
    &:nth-child(odd) {
        border: 3px solid #7562E0;
    }
    h3 {
        margin-bottom: 16px;
    }
    p {
        text-align: center;
        font-size: 17px;
    }
    &:nth-child(even) h3 {
        color: #fff;
    }
    &:nth-child(odd) h3 {
        color: #7562E0;
    }
    
    svg {
        margin-bottom: 7px;
    }
`