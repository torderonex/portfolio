import styled from 'styled-components';
import { baseColors } from '../../styles/consts';
import { Shadow } from '../../styles/shadow';
import { PropsWithChildren, useContext, useEffect, useRef } from 'react';
import HelpButton from './HelpButton';
import { App } from '../../types/App';
import { Context } from '../..';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { observer } from 'mobx-react-lite';
const Div = styled(Shadow)<{$left : number, $top: number, $zIndex : number}>`
    position: absolute;
    width:500px;
    height:500px;
    padding:2px;
    background-color: ${baseColors.taskBarColor};   
    user-select:none;
    ${
        props => (
            `
                left:${props.$left}px;
                top:${props.$top}px;
                z-index: ${props.$zIndex};
            `
        )
    }
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
    
    useEffect(() => {
        programRef.current?.addEventListener('mousedown', zIndexHandler)
        return () => {programRef.current?.removeEventListener('mousedown', zIndexHandler)}
    }, [])


    function minimizeHandler(){
        props.app.zIndex = -1;
    }

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
        if(props.app.process)
            store.closeApp(props.app.process);
    }

    function dragHandler(){
        const left = programRef.current?.style.left.replace('px','');
        if (left){
            props.app.left =  parseInt(left);
        }
        const top = programRef.current?.style.top.replace('px','');
        if (top){
            props.app.top =  parseInt(top);
        }
    }

    function zIndexHandler(){
        const apps = store.getApps();
        const max =  store.getMaxZIndex() + 1;
        props.app.zIndex = max;
    }

    useDragAndDrop(headerRef,programRef, dragHandler)

    const btnNames = ['File', 'Edit', 'Search', 'Help']

    return(
        <Div 
        {...props} 
        ref={programRef}
        $left={props.app.left}
        $top={props.app.top}
        $zIndex={props.app.zIndex}
        >
            <Header ref={headerRef}>
                <Ico src={props.app.ico} style={{height:"100%"}}/>
                <span style={{marginLeft:'5px'}}>
                    {props.app.name}
                </span>
                <HelpBtns>
                    <HelpButton onClick={minimizeHandler} src="/img/first.png"/>
                    <HelpButton onClick={fullscreenHandler} src="/img/second.png"/>
                    <HelpButton onClick={closeHandler} src="/img/third.png"/>
                </HelpBtns>
            </Header>
            <HelpPanel>
                {btnNames.map(e => (
                    <p key={Math.random()}>
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

export default observer(AppContainer);