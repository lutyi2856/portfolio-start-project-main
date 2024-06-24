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
        <div>
            <Icon width={`${props.iconWidth}`} height={`${props.iconHeight}`} viewBox={`${props.iconViewBox}`} iconID={`${props.cardIcon}`}/>
            <H3 text={`${props.cardTitle }`} />
            <Text textSize={'17px'} text={`${props.descrption }`}/>
        </div>
    );
};

const StyledCardService = styled.div<CardServicePropsType>`
display: flex;
flex-direction: column;
background-color: transparent;
border: 3px solid ${props => props.borderColor || '7562E0'};
border-radius: 16px;
`