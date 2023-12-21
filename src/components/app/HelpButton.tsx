import styled from 'styled-components';
import { baseColors } from '../../styles/consts';
import { Shadow } from '../../styles/shadow';
import React from 'react';


const HelpIco = styled.img`
    height:16px;
    width:16px;
    image-rendering:auto;
`

const HelpBtn = styled(Shadow)`
    color: black;
    cursor: pointer;
    width:16px;
    height: 16px;
    background-color: ${baseColors.taskBarColor};
    display:flex;
    align-items:center;
`

function HelpButton(props: any){
    const ref = React.useRef(null);
    return(
        <HelpBtn ref={ref}>
            <HelpIco src="/img/third.png"/>
        </HelpBtn>
    );
}

export default HelpButton;