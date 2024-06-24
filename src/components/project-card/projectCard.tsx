import React from 'react';
import {Image} from "../image/Image";
import {H3} from "../h3/H3";
import {Text} from "../text/Text";
import {Link} from "../link/Link";

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
        <div>
            <Image src={`${props.src}`} alt={`Проект.`} width={`311`} height={`173`}/>
            <H3 text={`${props.projectTitle }`}/>
            <Text  text={`${props.description }`}/>
            <Link text={'View Live'} background={'#7562E0'}/>
            <Link text={'LiveGithub Repo'}/>
        </div>
    );
};

