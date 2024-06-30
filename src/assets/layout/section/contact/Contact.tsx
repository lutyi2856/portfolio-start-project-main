import React from 'react';
import {FlexWrapper} from "../../../../components/flexWrapper";
import styled from "styled-components";
import {H2} from "../../../../components/h2/H2";
import {Text} from "../../../../components/text/Text";
import {Icon} from "../../../../components/icon/Icon";
import {H3} from "../../../../components/h3/H3";
import {Input} from "../../../../components/input/Input";
import {Container} from "../../../../components/Container";
import {theme} from "../../../../styles/Theme";


export const Contact = () => {
    return (
        <StyledSectionContact>
            <Container>
                <FlexWrapper wrap={'wrap'}>
                    <StyledContact>
                        <H2 text={'Connect with me:'}/>
                        <Text text={'Satisfied with me? Please contact me'}/>
                        <StyledContactList >
                            <li>
                                <a href="#" aria-label="ССылка на facebook">
                                    <Icon width={'32'} height={'32'} viewBox={'0 0 32 32'} iconID={'facebook'}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="ССылка на instagram">
                                    <Icon iconID={'instagram'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="ССылка на dribbble">
                                    <Icon iconID={'dribbble'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="ССылка на sms">
                                    <Icon iconID={'sms'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </a>
                            </li>
                        </StyledContactList>
                    </StyledContact>
                    <StyledContact>
                        <H3 text={'Contact me, let’s make magic together'}/>
                        <form action="#" method="post" target="_blank">
                            <StyledContactList>
                                <li>
                                    <Input id={'name'} placeholder={'Name:'}  />
                                </li>
                                <li>
                                    <Input type={'email'} id={'email'} placeholder={'Email:'}  />
                                </li>
                                <li>
                                    <textarea rows={5} name="message" placeholder="Message" id="message"/>
                                </li>
                            </StyledContactList>
                        </form>
                    </StyledContact>
                </FlexWrapper>
            </Container>

        </StyledSectionContact>
    );
};

const StyledSectionContact = styled.section`
    padding: 88px 0 258px 0;
    
    h2 {
        margin-bottom: 16px;
    }
    
    p {
        margin-bottom: 24px;
    }
`

const StyledContact = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    h3 {
        color: ${theme.colors.accent};
        margin-bottom: 24px;
    }
    textarea {
        background-color: ${theme.colors.inputBackroun};
        min-width: 472px;
        border: none;
        padding: 19px 16px 19px 16px;
        border-radius: 8px;
    }
`
const StyledContactList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    flex-direction: column;
    justify-content: flex-start;
    li {
        margin-bottom: 16px;
    }
`
