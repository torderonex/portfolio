import { useContext, useRef } from 'react';
import styled from 'styled-components';
import { Context } from '../..';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Shadow } from '../../styles/shadow';

const Div = styled(Shadow)<{$active : boolean}>`
    display:flex;
    align-items:center;
    ${props => (props.$active &&
        `border-top: 2px solid black;
        border-left: 2px solid black;
        border-bottom:2px solid white;
        border-right:2px solid white;`
        )
    }
    padding-right:3px;
    user-select:none;
    cursor:pointer;
`

const Ico = styled.img`
    width:3.5vh;
`

const Span = styled.span`
    font-weight:700;
    margin-left:5px;
    `

function StartBtn({...rest}){
    const {store} = useContext(Context);
    const ref = useRef(null);
    
    useOutsideClick(ref,( ) => store.setIsStartMenuOpen(false), store.getStartMenuStatus());

    return(
        <Div ref={ref} $active={store.getStartMenuStatus()} onClick={() => {store.setIsStartMenuOpen(!store.getStartMenuStatus())}}>
            <Ico src="/img/start.png"/>
            <Span>
                Start
            </Span>
        </Div>
    );
}

export default StartBtn;