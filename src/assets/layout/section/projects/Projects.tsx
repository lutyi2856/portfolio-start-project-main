import React from 'react';
import {Section} from "../Section";
import {FlexWrapper} from "../../../../components/flexWrapper";
import {H2} from "../../../../components/h2/H2";
import {Text} from "../../../../components/text/Text";
import {StyledWrapperCards} from "../about/About";
import {ProjectCard} from "../../../../components/project-card/projectCard";
import protject1 from '../../../image/Rectangle1.webp';
import protject12x from '../../../image/protject12x.webp';
import projtct13x from '../../../image/protject13x.webp';
import project2 from '../../../image/Rectangle2.webp';
import project22x from '../../../image/project22x.webp';
import project23x from '../../../image/project23x.webp';
import project3 from '../../../image/Rectangle3.webp';
import project32x from '../../../image/project32x.webp';
import project33x from '../../../image/project33x.webp';
import {Container} from "../../../../components/Container";
import styled from "styled-components";

export const Projects = () => {
    return (
        <StyledSectiopProject >
            <Container>
                <FlexWrapper wrap={'wrap'}>
                    <H2  text={'Featured projects:'}/>
                    <Text
                        text={'I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects'}/>
                    <StyledWrapperCards gridTemplateColumns={'repeat(3, 1fr)'}>
                        <ProjectCard
                            projectTitle={'TWINDER'}
                            description={'A live Geolocation app for finding tweets and twitter users around you.'}
                            src={protject1}
                            retina={`${project2} 1x, ${project22x} 2x, ${project23x} 3x`}/>
                        <ProjectCard
                            projectTitle={'LIVENTS'}
                            description={'A video streaming app with live Geolocation, for streaming events.'}
                            src={project2}
                            retina={`${protject1} 1x, ${protject12x} 2x, ${projtct13x} 3x`}/>
                        <ProjectCard
                            projectTitle={'MOOVE'}
                            description={'Mobile app for booking instant pickup & dropoff accross major cities.'}
                            src={project3}
                            retina={`${project3} 1x, ${project32x} 2x, ${project33x} 3x`}/>
                    </StyledWrapperCards>
                </FlexWrapper>
            </Container>

        </StyledSectiopProject>
    );
};

const StyledSectiopProject = styled.section`
padding: 40px 0 40px 0;
    h2 {
        margin-bottom: 16px;
    }
    p {
        margin-bottom: 36px;
    }
`