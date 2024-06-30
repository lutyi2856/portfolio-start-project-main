import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type InputPropsType = {
    name?: string
    type?: string
    placeholder?: string
    id?: string

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
    background-color: ${theme.colors.inputBackroun};
    min-width: 472px;
    border-radius: 8px;
    padding: 19px 16px 19px 16px;
`