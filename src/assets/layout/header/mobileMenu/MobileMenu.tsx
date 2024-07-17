import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";

export const MobileMenu = () => (
    <StyledMobileMenu>
        <BurgerButton isOpen={false}>
            <span></span>
        </BurgerButton>
        <MobileMenuPopup isOpen={false}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About me</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </MobileMenuPopup>

    </StyledMobileMenu>
);

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(24, 24, 36, 0.48);
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 99999;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;

    `}
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li:not(:last-child) {
        margin-right: 52px;
        @media ${theme.media.tablet} {
            margin-right: 0;
        }
    }

    a {
        ${theme.typography.menuItem}
    }

    a:active, a:hover {
        color: ${theme.colors.accent}
    }

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    z-index: 9999999;
    width: 100px;
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    border: none;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.text};
        position: absolute;
        left: 40px;
        bottom: 50px;
        

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.text};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.text};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`