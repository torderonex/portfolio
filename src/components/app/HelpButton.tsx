import styled from 'styled-components';
import { baseColors } from '../../styles/consts';
import { Shadow } from '../../styles/shadow';
import React from 'react';
import { useShadow } from '../../hooks/useShadow';


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

interface props {
    src : string
}

function HelpButton({src} : props){
    const ref = React.useRef(null);
    useShadow(ref);
    return(
        <HelpBtn ref={ref}>
            <HelpIco src={src}/>
        </HelpBtn>
    );
}

export default HelpButton;