import styled from 'styled-components';
import { baseColors } from '../../styles/consts';
import { Shadow } from '../../styles/shadow';
import React, { PropsWithChildren, ReactElement, useContext, useRef } from 'react';
import HelpButton from './HelpButton';
import { App } from '../../types/App';
import { Context } from '../..';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
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

interface props extends PropsWithChildren{
    app : App;
}

function AppContainer(props: props){
    const {store} = useContext(Context);
    const ref = useRef(null);

    useDragAndDrop(ref,ref)
    function closeHandler(){
        store.closeApp(props.app.name);
    }
    return(
        <Div {...props} ref={ref}>
            <Header>
                <Ico src={props.app.ico} style={{height:"100%"}}/>
                <span style={{marginLeft:'5px'}}>
                    {props.app.name}
                </span>
                <HelpBtns>
                    <HelpButton src="/img/first.png"/>
                    <HelpButton src="/img/second.png"/>
                    <HelpButton onClick={closeHandler} src="/img/third.png"/>
                </HelpBtns>
            </Header>
            {
                props.children
            }
        </Div>
    );
}

export default AppContainer;