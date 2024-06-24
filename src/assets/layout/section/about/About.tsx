import React from 'react';
import {FlexWrapper} from "../../../../components/flexWrapper";
import {H2} from "../../../../components/h2/H2";
import {Section} from "../Section";
import {Text} from "../../../../components/text/Text";
import {CardAbout} from "../../../../components/card-about/cardAbout";
import styled from "styled-components";



export const About = () => {
    return (
        <Section background={'#181824'}>
            <FlexWrapper wrap={'wrap'}>
                <H2 text={'About me:'}/>
                <Text text={'Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles. \n' +
                    'Here are the major skiills i have. '}/>
                <p><span>5+</span>Years of experience. Specialised in building apps, while ensuring a seamless
                    web experience for end users.
                </p>
                <StyledWrapperCards>
                    <CardAbout cardTitle={'UI & UX DESIGNING'} iconWidth={'42'} iconHeight={'42'} iconViewBox={'0 0 42 42'} cardIcon={'rulerPen'} background={'#BDBDBD'}/>
                    <CardAbout cardTitle={'WEB DEVELOPMENT'} iconWidth={'52'} iconHeight={'52'} iconViewBox={'0 0 52 52'} cardIcon={'code'} background={'#BDBDBD'}/>
                    <CardAbout cardTitle={'MOBILE DEVELOPMENT'} iconWidth={'62'} iconHeight={'62'} iconViewBox={'0 0 62 62'} cardIcon={'android'} background={'#BDBDBD'}/>
                    <CardAbout cardTitle={'UI & UX DESIGNING'} iconWidth={'55'} iconHeight={'55'} iconViewBox={'0 0 55 55'} cardIcon={'python'} background={'#BDBDBD'}/>

                </StyledWrapperCards>
            </FlexWrapper>
        </Section>
    );
};

type StyledWrapperCardsProps = {
    width?: string;
    display?: string;
    gridTemplateColumns?: string;
    columnGap?: string;
};

export const StyledWrapperCards = styled.div<StyledWrapperCardsProps>`
    width: ${props => props.width || '100%'};
    display: ${props => props.display || 'grid'};
    grid-template-columns: ${props => props.gridTemplateColumns || 'repeat(4, 1fr)'};
    column-gap: ${props => props.columnGap || '17px'};
`;