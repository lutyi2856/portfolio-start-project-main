import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type LinkPropsType = {
    href?: string
    background?: string
    text?: string
    iconID?: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
}

export const Link = (props:LinkPropsType) => {
    return (
           <StyledLink href={props.href || '#'} background={props.background}> {props.text}{props.iconID && (
               <Icon
                   iconID={`${props.iconID}`}
                   width={`${props.iconWidth}`}
                   height={`${props.iconHeight}`}
                   viewBox={`${props.iconViewBox}`}
               />
           )}</StyledLink>
    );
};
const StyledLink = styled.a<LinkPropsType>`
    background-color: ${props => props.background};
`
