import React from 'react';
import {H2} from "../../../../components/h2/H2";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {StyledWrapperCards} from "../about/About";
import {CardService} from "../../../../components/card-service/CardService";
import {Container} from "../../../../components/Container";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const Service = () => {
    return (
        <StyledSectionService>
            <Container>
                <FlexWrapper wrap={'wrap'}>
                    <H2  text={'The services i offer:'}/>
                    <StyledWrapperCards gridTemplateColumns={'repeat(3, 1fr)'} >
                        <CardService

                            descrption={'I design beautiful web iterfaces with Figma and Adove XD'}
                            iconWidth={'56'}
                            iconHeight={'56'}
                            iconViewBox={'0 0 56 56'}
                            cardIcon={'rulerPen'}
                            cardTitle={'UI & UX DESIGNING'}/>
                        <CardService
                            descrption={'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS'}
                            iconWidth={'57'}
                            iconHeight={'57'}
                            iconViewBox={'0 0 57 57'}
                            cardIcon={'code'}
                            cardTitle={'WEB DEVELOPMENT'} />
                        <CardService
                            descrption={'I am an expert mobile developer. I have experience using Flutter and React Native.'}
                            iconWidth={'70'}
                            iconHeight={'70'}
                            iconViewBox={'0 0 70 70'}
                            cardIcon={'android'}
                            cardTitle={'MOBILE DEVELOPMENT'} />
                        <CardService
                            descrption={'I can use version control systems well, and Git & Mecurial are my go-to tool.'}
                            iconWidth={'62'}
                            iconHeight={'62'}
                            iconViewBox={'0 0 62 62'}
                            cardIcon={'hierarchySquare'}
                            cardTitle={'VERSION CONTROL'} />
                        <CardService
                            descrption={'I have core understanding of NPM. I can also develop general purpose applications with NodeJS'}
                            iconWidth={'54'}
                            iconHeight={'54'}
                            iconViewBox={'0 0 54 54'}
                            cardIcon={'javascript'}
                            cardTitle={'NPM AND NODEJS'} />
                        <CardService
                            descrption={'I can collect content and data from the internet then manipulate and analyze as needed.'}
                            iconWidth={'48'}
                            iconHeight={'48'}
                            iconViewBox={'0 0 48 48'}
                            cardIcon={'slider'}
                            cardTitle={'WEB SCRAPING'}/>

                    </StyledWrapperCards>
                </FlexWrapper>
            </Container>

        </StyledSectionService>
    );
};

const StyledSectionService = styled.section`
    padding: 40px 0 40px 0;
    h2 {
        margin-bottom: 32px;
    }
    @media ${theme.media.tablet} {
        ${StyledWrapperCards} {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media ${theme.media.mobile} {
        ${StyledWrapperCards} {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    
`