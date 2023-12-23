import styled from 'styled-components';
import { baseColors } from '../../styles/consts';
import { Shadow } from '../../styles/shadow';
import React, { HtmlHTMLAttributes, PropsWithChildren, ReactElement, useContext, useRef } from 'react';
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
    padding:2px;
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

const HelpPanel = styled.div`
    display:flex;
    gap:15px;
    margin-top:3px;
    margin-bottom:3px;
`

const HelpBtns = styled.div`
    display:flex;
    gap:2px;
`
const Ico = styled.img`
       
`;

const Span = styled.span`
    text-decoration: underline;
    text-transform:uppercase;
`

interface props extends PropsWithChildren{
    app : App;
}

function AppContainer(props: props){
    const {store} = useContext(Context);
    const programRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef(null);
    useDragAndDrop(headerRef,programRef)

    function fullscreenHandler() {
        const { current } = programRef;
    
        if (current) {
            current.style.width = '100%';
            current.style.height = '96vh';
            current.style.top = '0';
            current.style.left = '0';
        }
    }

    function closeHandler(){
        store.closeApp(props.app.name);
    }

    const btnNames = ['File', 'Edit', 'Search', 'Help']

    return(
        <Div {...props} ref={programRef}>
            <Header ref={headerRef}>
                <Ico src={props.app.ico} style={{height:"100%"}}/>
                <span style={{marginLeft:'5px'}}>
                    {props.app.name}
                </span>
                <HelpBtns>
                    <HelpButton src="/img/first.png"/>
                    <HelpButton onClick={fullscreenHandler} src="/img/second.png"/>
                    <HelpButton onClick={closeHandler} src="/img/third.png"/>
                </HelpBtns>
            </Header>
            <HelpPanel>
                {btnNames.map(e => (
                    <p>
                        <Span>
                            {e[0]}
                        </Span>
                        {e.substring(1)}
                    </p>
                ))}
            </HelpPanel>
            {
                props.children
            }
        </Div>
    );
}

export default AppContainer;