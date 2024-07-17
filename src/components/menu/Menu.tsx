import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => (
    <StyledMenu>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About me</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </StyledMenu>
);

const StyledMenu = styled.nav`
ul {
    display: flex;
}
    li:not(:last-child) {
        margin-right: 52px; 
    }
    
    a {
        ${theme.typography.menuItem}
    }
    a:active, a:hover {
        color: ${theme.colors.accent}
    }
    @media ${theme.media.tablet} {
        display: none;
    }
    
    
`