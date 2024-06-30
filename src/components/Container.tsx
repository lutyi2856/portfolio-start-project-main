import styled from "styled-components";

type ContainerPropsType = {
    padding?: string
}

export const Container = styled.div<ContainerPropsType>`
    width: 1066px;
    margin: 0 auto;
`