import React from 'react';

type H2PropsType = {
    text?: string

}



export const H2 = (props:H2PropsType) => {
    return (
        <h2>{props.text}</h2>
    );
};
