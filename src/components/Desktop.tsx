import styled from "styled-components";
import { baseColors } from "../styles/consts";
import DesktopApp from "./DesktopApp";
import AppContainer from "./app/AppContainer";
import React, { useRef, useEffect, useContext } from "react";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const Main = styled.main`
    background-color: ${baseColors.wallpaperColor};
    height: 96vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr); 
    grid-auto-flow: column;
    gap:0;
    
`
function Desktop(){
    const mock = {
        name:'Text.txt',
        ico:'/img/text.png',
        program : <></>
    };
    const {store} = useContext(Context);
    return(
        <Main>
            <DesktopApp app={mock}/>
            <DesktopApp app={mock}/>
            <DesktopApp app={mock}/>
            {
                store.getApps().map(e => (
                    <AppContainer key={Math.random()} app={e}>
                        {e.program}
                    </AppContainer>
                ))
            }
        </Main>
    );
}

export default observer(Desktop);