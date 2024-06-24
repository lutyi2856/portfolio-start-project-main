import React from 'react';
import styled from "styled-components";

type InputPropsType = {
    name?: string
    type?: string
    placeholder?: string
    id?: string
    background?: string
}

export const Input = (props:InputPropsType) => {
    return (
        <StyledInput  type={props.type || 'text'} name={props.name} placeholder={props.placeholder} id={props.id} required/>
    );
};

const StyledInput = styled.input<InputPropsType>`
padding: 19px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${props => props.background || '#f5f5f5'};
`