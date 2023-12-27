import styled from 'styled-components';
import { baseColors } from '../../styles/consts';
import { Shadow } from '../../styles/shadow';
import { PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { App } from '../../types/App';
import { Context } from '../..';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import {useResizableBox} from '../../hooks/useResizable'
import { observer } from 'mobx-react-lite';
import HelpButtons from './HelpButtons';

const Div = styled(Shadow)<{$left : number,
                            $top: number,
                            $zIndex : number,
                            $width : number,
                            $height: number}> `
    position: absolute;
    width:${props => `${props.$width}px`};
    height:${props => `${props.$height}px`};
    padding:2px;
    background-color: ${baseColors.taskBarColor};   
    user-select:none;
    ${
        props => (
            `
                left:${props.$left}px !important;
                top:${props.$top}px !important;
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


const Ico = styled.img`
       
`;

const Span = styled.span`
    text-decoration: underline;
    text-transform:uppercase;
`

const Cursor = styled.div`
    position:absolute;
    width: 20px;
    height:20px;
    bottom:0;
    right:0;
    cursor:nwse-resize;
`

interface props extends PropsWithChildren{
    app : App;
}

function AppContainer(props: props){
    const {store} = useContext(Context);
    const programRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef(null);
    
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

    const {  onMouseDown  } = useResizableBox(props.app);
    
    function onMouseDownHandle(e : React.MouseEvent<Element,MouseEvent>){
        onMouseDown(e);
        zIndexHandler();
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
        $width={props.app.size.width}
        $height={props.app.size.height}
        onMouseDown={onMouseDownHandle}
        >
            <Header ref={headerRef}>
                <Ico src={props.app.ico} style={{height:"100%"}}/>
                <span style={{marginLeft:'5px'}}>
                    {props.app.name}
                </span>
                <HelpButtons app={props.app}/>
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
            <Cursor/>
        </Div>
    );
}

export default observer(AppContainer);