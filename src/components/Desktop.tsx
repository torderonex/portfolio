import styled from "styled-components";
import { baseColors } from "../styles/consts";
import DesktopApp from "./DesktopApp";
import AppContainer from "./app/AppContainer";
import {useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import TextDocument from "./app/TextDocument";
import { App } from "../types/App";

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
    const mock : App = {
        name:'my projects.txt',
        ico:'/img/text.png',
        program : <TextDocument/>,
        zIndex : 0,
        process : null,
        left: 120,
        top: 120,
    };
    const mock2 : App = {
        name:'about me.txt',
        ico:'/img/text.png',
        program : <TextDocument/>,
        zIndex : 0,
        process : null,
        left: 120,
        top: 120,
    };
    const {store} = useContext(Context);
    
    return(
        <Main>
            <DesktopApp app={mock}/>
            <DesktopApp app={mock2}/>
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