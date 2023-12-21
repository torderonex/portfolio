import styled from 'styled-components';
import { baseColors } from '../../styles/consts';
import { Shadow } from '../../styles/shadow';
import React from 'react';
import HelpButton from './HelpButton';

const Div = styled(Shadow)`
    position: absolute;
    width:500px;
    height:500px;
    left: 100px;
    top: 100px;
    background-color: ${baseColors.taskBarColor};   
    user-select:none;
`

const Header = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-weight:700px;
    color : ${baseColors.taskBarColor};
    font-size:15px;
    height:20px;
    cursor: grab;
    background-color:${baseColors.windowsBlue};
`

const HelpBtns = styled.div`
    display:flex;
    gap:2px;
`
const Ico = styled.img`
       
`;

function AppContainer(props: any,ref : any ){
    return(
        <Div {...props} ref={ref}>
            <Header>
                <Ico src='/img/text.png' style={{height:"100%"}}/>
                <span style={{marginLeft:'5px'}}>
                    Text.txt - Notepad
                </span>
                <HelpBtns>
                    <HelpButton src="/img/first.png"/>
                    <HelpButton src="/img/second.png"/>
                    <HelpButton src="/img/third.png"/>

                </HelpBtns>
        
                
            </Header>
           
        </Div>
    );
}

export default React.forwardRef(AppContainer);