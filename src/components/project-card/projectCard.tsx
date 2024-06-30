import React from 'react';
import {Image} from "../image/Image";
import {H3} from "../h3/H3";
import {Text} from "../text/Text";
import {Link} from "../link/Link";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type ProjectCardPropsType = {
    alt?: string
    width?: string
    height?: string
    src?: string
    projectTitle?: string
    description?: string

}

export const ProjectCard = (props:ProjectCardPropsType) => {
    return (
        <StyledProjectCard>
            <Image src={`${props.src}`} alt={`Проект.`} width={`311`} height={`173`}/>
            <H3 text={`${props.projectTitle }`}/>
            <Text  text={`${props.description }`}/>
            <Link text={'View Live'} />
            <Link text={'Github Repo'}/>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div`
    background-color: ${theme.colors.inputBackroun};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 16px 23px 16px;
    gap: 16px;
    a {
        display: flex;
        width: calc(50% - 8px);
        justify-content: center;
        align-items: center;
        padding: 7px 0;
        background-color: ${theme.colors.accent};
        ${theme.typography.buttonText};
        border: 2px solid #7562e0;
        border-radius: 8px;
    }
    
    a:last-child {
        background-color: transparent;
    }
    img {
        margin-bottom: 16px;
    }
    h3 {
        margin-bottom: 5px;
    }
    p {
        margin-bottom: 24px;
    }
`