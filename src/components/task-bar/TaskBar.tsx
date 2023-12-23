import styled from "styled-components";
import { baseColors } from "../../styles/consts";
import TimeTable from "../TimeTable";
import { useContext, useRef, useState } from "react";
import StartMenu from "../start-menu/StartMenu";
import StartBtn from "./StartBtn";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Shadow } from "../../styles/shadow";

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

const Program = styled(Shadow)`
    text-align:center;
    min-width:150px;
    cursor: pointer;
`

function TaskBar() {
    const {store} = useContext(Context);
    return (
        <Footer>
            <Wrapper>
                <StartBtn/>
                {store.getStartMenuStatus() && <StartMenu/>}
                <Programs>
                    {
                        store.getApps().map(e => (
                            <Program key={Math.random()}>{e.name}</Program>
                        ))
                    }    
                </Programs>
            </Wrapper>
            
            <TimeTable/>
        </Footer>
    );
}

export default observer(TaskBar);
