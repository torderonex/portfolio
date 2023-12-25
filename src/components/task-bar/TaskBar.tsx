import styled from "styled-components";
import { baseColors } from "../../styles/consts";
import TimeTable from "../TimeTable";
import { useContext, useRef, useState } from "react";
import StartMenu from "../start-menu/StartMenu";
import StartBtn from "./StartBtn";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Shadow } from "../../styles/shadow";
import { App } from "../../types/App";

const Footer = styled.footer`
    width: 100%;
    background-color: ${baseColors.taskBarColor};
    position: absolute;
    padding:2px;
    bottom : 0;
    height: 4vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-top:1px solid white;
`;

const Programs = styled.div`
    display:flex;
    gap:3px;
    margin-left:3px;
`

const Wrapper = styled.div`
    display:flex;
`

const Program = styled(Shadow)<{$active : boolean}>`
    min-width:150px;
    display:flex;
    gap:5px;
    text-align: center;
    align-items: center;
    cursor: pointer;
    ${
        (props) => (
            props.$active && `
            border-top: 2px solid black;
            border-left: 2px solid black;
            border-bottom:2px solid white;
            border-right:2px solid white;
            `
        )
    }
`

const Ico = styled.img`
    height:3vh;
    margin-left:5px;
`

function TaskBar() {
    const {store} = useContext(Context);

    function programClickHandle(a : App){
        a.zIndex = store.getMaxZIndex() + 1;
    }

    return (
        <Footer>
            <Wrapper>
                <StartBtn/>
                {store.getStartMenuStatus() && <StartMenu/>}
                <Programs>
                    {
                        store.getApps().map(e => (
                            <Program 
                             $active={(e.zIndex !== -1) && (e.zIndex === store.getMaxZIndex())}
                             onClick={() => {programClickHandle(e)}}
                             key={Math.random()}>
                                <Ico src={e.ico}/>
                                {e.name}
                            </Program>
                        ))
                    }    
                </Programs>
            </Wrapper>
            
            <TimeTable/>
        </Footer>
    );
}

export default observer(TaskBar);
