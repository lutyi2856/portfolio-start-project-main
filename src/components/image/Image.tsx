import React from 'react';


type ImagePropsType = {
    src?: string
    alt?: string
    width?: string
    height?: string
}

export const Image = (props:ImagePropsType) => {
    return (
        <img width={props.width} height={props.height} src={props.src} alt={props.alt}/>
    );
};

