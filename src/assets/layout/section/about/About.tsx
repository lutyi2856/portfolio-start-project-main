import React from 'react';
import {FlexWrapper} from "../../../../components/flexWrapper";
import {H2} from "../../../../components/h2/H2";
import {Text} from "../../../../components/text/Text";
import {CardAbout} from "../../../../components/card-about/cardAbout";
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {theme} from "../../../../styles/Theme";

type StyledWrapperCardsProps = {
    width?: string;
    display?: string;
    gridTemplateColumns?: string
};

export const About = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper wrap={'wrap'}>
                    <H2  text={'About me:'}/>
                    <Text text={'Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles. \n' +
                              'Here are the major skiills i have. '}/>
                    <StyledTextAbout>
                        <StyledSpanAbout>5+</StyledSpanAbout>
                        Years of experience. Specialised in building apps, while ensuring a seamless
                        web experience for end users.
                    </StyledTextAbout>
                    <StyledWrapperCards>
                        <CardAbout cardTitle={'UI & UX DESIGNING'}
                                   iconWidth={'42'}
                                   iconHeight={'42'}
                                   iconViewBox={'0 0 42 42'}
                                   cardIcon={'rulerPen'}
                        />
                        <CardAbout cardTitle={'WEB DEVELOPMENT'}
                                   iconWidth={'52'}
                                   iconHeight={'52'}
                                   iconViewBox={'0 0 52 52'}
                                   cardIcon={'code'} />
                        <CardAbout cardTitle={'MOBILE DEVELOPMENT'}
                                   iconWidth={'62'}
                                   iconHeight={'62'}
                                   iconViewBox={'0 0 62 62'}
                                   cardIcon={'android'} />
                        <CardAbout cardTitle={'UI & UX DESIGNING'}
                                   iconWidth={'55'} iconHeight={'55'}
                                   iconViewBox={'0 0 55 55'}
                                   cardIcon={'python'} />

                    </StyledWrapperCards>
                </FlexWrapper>
            </Container>

        </StyledSection>
    );
};

const StyledSection = styled.section`
padding: 55px 0 40px 0;
    h2 {
        margin-bottom: 8px;
    }
    p {
        margin-bottom: 10px;
    }
    p + p {
        margin-bottom: 0;  
    }
`

export const StyledWrapperCards = styled.div<StyledWrapperCardsProps>`
    width: ${props => props.width || '100%'};
    display: ${props => props.display || 'grid'};
    grid-template-columns: ${props => props.gridTemplateColumns || 'repeat(4, 1fr)'};
    row-gap:  16px;
    column-gap: 22px;
`;

const StyledSpanAbout = styled.span`
    font-size: 96px;
    font-weight: 600;
    color: ${theme.colors.accent};
`

const StyledTextAbout = styled.p`
    display: flex;
    align-items: center;
    margin: 0 0 58px 0;
`