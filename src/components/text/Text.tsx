import React from 'react';
import styled from "styled-components";

type TextPropsType = {
    text: string,
    textSize?: string
    margin?: string
}

type StyledTextProps = {
    textSize?: string
}

export const Text = (props: TextPropsType) => {
    return (
        <StyledText textSize={props.textSize}>{props.text}</StyledText>
    )
}

const StyledText = styled.p<StyledTextProps>`
    font-size: ${props => props.textSize};
`