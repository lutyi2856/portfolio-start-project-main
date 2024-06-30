import React from 'react';
import {Image} from "../../../../components/image/Image";
import portret from '../../../image/portrait.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/flexWrapper";
import {Link} from "../../../../components/link/Link";
import {Container} from "../../../../components/Container";
import {theme} from "../../../../styles/Theme";



type StyledH1propsType = {
    fontSize?: string
}

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper>
                    <StyledMainDiv>
                        <StyledSpanHello>Hello, i’m</StyledSpanHello>
                        <StyledSpanName>Jayjay D. Dinero</StyledSpanName>
                        <StyledH1>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web
                            experiences
                            for end-users.</StyledH1>
                        <Link text={'About me'}
                              iconWidth={'24'} iconHeight={'24'}
                              iconViewBox={'0 0 24 24'}
                              iconID={'user'}/>
                        <Link text={'Projects'}
                              iconWidth={'20'}
                              iconHeight={'20'}
                              iconViewBox={'0 0 20 20'}
                              iconID={'eye'}/>
                    </StyledMainDiv>
                    <StyledBefover>
                        <Image src={portret}
                               alt={'Мужчина'}
                               width={'444'}
                               height={'444'} typeImg={'decoretion'}/>
                    </StyledBefover>

                </FlexWrapper>
            </Container>

        </StyledMain>
    )

}


const StyledMain = styled.main`
    background-color: #181824;
    padding: 209px 0 178px 0;
    a {
        display: flex;
        background-color: ${theme.colors.accent};
        ${theme.typography.buttonText};
        padding: 10px 25px;
        border: 2px solid #7562e0;
        border-radius: 8px;
        margin-right: 32px;
    }
    
    a + a {
        background-color: transparent;
        margin-right: 0;
    }


`
const StyledSpanHello = styled.span`
    width: 100%;
    margin: 0 0 6px 0;
    font-size: 32px;
`
const StyledSpanName = styled.span`
    width: 100%;
    margin: 0 0 12px 0;
    font-size: 52px;
`

const StyledMainDiv = styled.div`
    width: 586px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    padding: 0 0 50px 0;
`
const StyledH1 = styled.h1<StyledH1propsType>`
    font-size: ${props => props.fontSize || '18px'};
    font-weight: 500;
    margin: 0 0 29px 0;
    max-width: 435px;
`
const StyledBefover = styled.div`
    position: relative;

    &::after {
        content: '';
        width: 486px;
        height: 486px;
        position: absolute;
        top: 22px;
        background-color: ${theme.colors.accent};
        border-radius: 50%;
    }

    &::before {
        content: '';
        width: 500px;
        height: 142px;
        position: absolute;
        z-index: 2;
        bottom: -155px;
        background-color: ${theme.colors.background};
    }
`

