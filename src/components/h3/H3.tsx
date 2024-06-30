import React from 'react';



type H3propsType = {
    text?: string
}


export const H3 = (props:H3propsType) => {
    return (
        <h3>{props.text}</h3>
    );
};

