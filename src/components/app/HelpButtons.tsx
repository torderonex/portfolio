import React, { useContext } from 'react'
import { App } from '../../types/App';
import { Context } from '../..';
import styled from 'styled-components';
import HelpButton from './HelpButton';

const HelpBtns = styled.div`
    display:flex;
    gap:2px;
`

interface props{
    app : App
}

export default function HelpButtons(props : props) {
  
    const {store} = useContext(Context);

    function minimizeHandler(){
        props.app.zIndex = -1;
    }

    function fullscreenHandler() {
        props.app.top = 0;
        props.app.left = 0;
        props.app.size.width = window.innerWidth-2;
        props.app.size.height = Math.floor(window.innerHeight * 0.95);
    }

    function closeHandler(){
        if(props.app.process)
            store.closeApp(props.app.process);
    }
  
    return (
    <HelpBtns>
        <HelpButton onClick={minimizeHandler} src="/img/first.png"/>
        <HelpButton onClick={fullscreenHandler} src="/img/second.png"/>
        <HelpButton onClick={closeHandler} src="/img/third.png"/>
    </HelpBtns>
  )
}
