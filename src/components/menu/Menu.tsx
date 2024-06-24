import React from 'react';
import styled from "styled-components";

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
    a {
        color: #fff;
    }
`