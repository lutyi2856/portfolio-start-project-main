import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/flexWrapper";

export const Header = () => (
    <StyledHeader>
        <FlexWrapper justify={'space-between'} align={'center'}>
         <Logo />
         <Menu />
        </FlexWrapper>
    </StyledHeader>
    
);

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #181824;
`