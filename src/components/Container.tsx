import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    @media ${theme.media.tablet} {
        padding: 0 20px;
        max-width: 768px;
    }

    @media ${theme.media.mobile} {
        padding: 0 20px;
        max-width: 576px;
    }
`