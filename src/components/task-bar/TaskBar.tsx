import styled from "styled-components";
import { baseColors } from "../../styles/consts";
import TimeTable from "../TimeTable";
import { useContext, useRef, useState } from "react";
import StartMenu from "../start-menu/StartMenu";
import StartBtn from "./StartBtn";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { useOutsideClick } from "../../hooks/useOutsideClick";
const Footer = styled.footer`
    width: 100%;
    background-color: ${baseColors.taskBarColor};
    position: absolute;
    bottom : 0;
    height: 4vh;
    align-items: center;
    display: flex;
    padding:4px;
    justify-content: space-between;
    border-top:1px solid white;
`;



function TaskBar() {
    const {store} = useContext(Context);
    return (
        <Footer>
            <StartBtn/>
            {store.getStartMenuStatus() && <StartMenu/>}
            <TimeTable/>
        </Footer>
    );
}

export default observer(TaskBar);
