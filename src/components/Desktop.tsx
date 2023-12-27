import styled from "styled-components";
import { baseColors } from "../styles/consts";
import DesktopApp from "./DesktopApp";
import AppContainer from "./app/AppContainer";
import {useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { desktopApps } from "../apps/DesktopApps";



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
   

    const {store} = useContext(Context);
    return(
        <Main>
            {
                desktopApps.map(e => (
                    <DesktopApp key={Math.random()} app={e}/>
                ))
            }
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