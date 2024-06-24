import styled from "styled-components";

type FlexWrapperPropsType = {
   direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType> `
    display: flex;
    width: 1066px;
    margin: 0 auto;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
`