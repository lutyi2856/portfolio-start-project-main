import React from 'react';
import {Section} from "../Section";
import {FlexWrapper} from "../../../../components/flexWrapper";
import styled from "styled-components";
import {H2} from "../../../../components/h2/H2";
import {Text} from "../../../../components/text/Text";
import {Icon} from "../../../../components/icon/Icon";
import {H3} from "../../../../components/h3/H3";
import {Input} from "../../../../components/input/Input";

type ContactPropsType = {
    flexDirection?: string
    gap?: string
}

export const Contact = () => {
    return (
        <Section>
            <FlexWrapper wrap={'wrap'}>
                <StyledContact flexDirection={'column'}>
                    <H2 text={'Connect with me:'}/>
                    <Text text={'Satisfied with me? Please contact me'}/>
                    <StyledContactList >
                        <li>
                            <a href="#">
                                <Icon/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon width={'32'} height={'32'} viewBox={'0 0 32 32'} iconID={'facebook'}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon iconID={'instagram'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon iconID={'dribbble'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon iconID={'sms'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                            </a>
                        </li>
                    </StyledContactList>
                </StyledContact>
                <StyledContact flexDirection={'column'}>
                    <H3 text={'Contact me, let’s make magic together'}/>
                    <form action="#" method="post" target="_blank">
                            <StyledContactList flexDirection={'column'}>
                                <li>
                                    <Input id={'name'} placeholder={'Name:'}  />
                                </li>
                                <li>
                                    <Input type={'email'} id={'email'} placeholder={'Email:'}  />
                                </li>
                                <li>
                                    <textarea  name="message" placeholder="Message" id="message"/>
                                </li>
                            </StyledContactList>
                    </form>
                </StyledContact>
            </FlexWrapper>
        </Section>
    );
};

const StyledContact = styled.div<ContactPropsType>`
    width: 50%;
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
`
const StyledContactList = styled.ul<ContactPropsType>`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.gap};
    flex-direction: ${props => props.flexDirection || 'row'};
`
