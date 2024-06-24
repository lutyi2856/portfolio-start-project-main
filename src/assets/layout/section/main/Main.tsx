import React from 'react';
import {Text} from "../../../../components/text/Text";
import {Image} from "../../../../components/image/Image";
import portret from '../../../image/portrait.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/flexWrapper";
import {Link} from "../../../../components/link/Link";
import {Icon} from "../../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
        <FlexWrapper>
            <div>
                <span>Hello, i’m</span>
                <span>Jayjay D. Dinero</span>
                <h1>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</h1>
                <Link background={'#181824'} text={'About me'} iconWidth={'24'} iconHeight={'24'} iconViewBox={'0 0 24 24'} iconID={'user'} />
                <Link background={'#181824'} text={'Projects'} iconWidth={'20'} iconHeight={'20'} iconViewBox={'0 0 20 20'} iconID={'eye'}/>
            </div>
            <Image src={portret} alt={'Мужчина'} width={'444'} height={'444'} />
        </FlexWrapper>
        </StyledMain>
    )

}

const StyledMain = styled.main`
background-color: #181824;
`

