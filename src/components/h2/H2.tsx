import React from 'react';
import styled from "styled-components";

type H2PropsType = {
    text?: string
}

export const H2 = (props:H2PropsType) => {
    return (
        <h2>{props.text}</h2>
    );
};

