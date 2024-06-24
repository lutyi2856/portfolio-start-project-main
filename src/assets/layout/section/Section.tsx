import styled from "styled-components";

type SectionPropsType = {
    padding?: string,
    background?: string
}

export const Section = styled.section<SectionPropsType>`
padding: ${props => props.padding};
    background-color: ${props => props.background};
`