import React from 'react';
import iconsSprite from '../../assets/image/iconsSprite.svg';
import styled from "styled-components";

type IconPropsType = {
    iconID?: string
    width?: string
    height?: string
    viewBox?: string
    margin?: string
}

type StyledSvgPropsType = {
    margin?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon margin={`${props.margin}`} width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use  xlinkHref={ `${iconsSprite}#${props.iconID}` }/>
        </StyledIcon>
    );
}

const StyledIcon = styled.svg<StyledSvgPropsType>`
margin: ${props => props.margin};
`