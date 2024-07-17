import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => (
    <StyledHeader>
        <Container>
            <FlexWrapper justify={'space-between'} align={'center'} >
                <Logo />
                <Menu />
                <MobileMenu/>
            </FlexWrapper>
        </Container>

    </StyledHeader>
    
);

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #181824;
    padding: 19px 0;
`