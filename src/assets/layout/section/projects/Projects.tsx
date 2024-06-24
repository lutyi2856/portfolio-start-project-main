import React from 'react';
import {Section} from "../Section";
import {FlexWrapper} from "../../../../components/flexWrapper";
import {H2} from "../../../../components/h2/H2";
import {Text} from "../../../../components/text/Text";
import {StyledWrapperCards} from "../about/About";
import {ProjectCard} from "../../../../components/project-card/projectCard";
import protject1 from '../../../image/Rectangle1.webp';
import project2 from '../../../image/Rectangle2.webp';
import project3 from '../../../image/Rectangle3.webp';

export const Projects = () => {
    return (
        <Section>
            <FlexWrapper wrap={'wrap'}>
                <H2 text={'Featured projects:'}/>
                <Text text={'I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects'}/>
                <StyledWrapperCards gridTemplateColumns={'repeat(3, 1fr)'}>
                    <ProjectCard projectTitle={'TWINDER'} description={'A live Geolocation app for finding tweets and twitter users around you.'} src={protject1}/>
                    <ProjectCard projectTitle={'LIVENTS'} description={'A video streaming app with live Geolocation, for streaming events.'} src={project2}/>
                    <ProjectCard projectTitle={'MOOVE'} description={'Mobile app for booking instant pickup & dropoff accross major cities.'} src={project3}/>
                </StyledWrapperCards>
            </FlexWrapper>
        </Section>
    );
};

