import React from 'react';
import {Icon} from "../icon/Icon";


export type LinkPropsType = {
    href?: string
    text?: string
    iconID?: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
}

export const Link = (props:LinkPropsType) => {
    return (
           <a  href={props.href || '#'}> {props.text}{props.iconID && (
               <Icon
                   iconID={`${props.iconID}`}
                   width={`${props.iconWidth}`}
                   height={`${props.iconHeight}`}
                   viewBox={`${props.iconViewBox}`}
                   margin={'0 0 0 6px'}
               />
           )}</a>
    );
};

