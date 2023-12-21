import styled from "styled-components";
import { baseColors } from "../styles/consts";
import DesktopApp from "./DesktopApp";
import AppContainer from "./app/AppContainer";

const Main = styled.main`
    background-color: ${baseColors.wallpaperColor};
    height: 95vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr); 
    grid-auto-flow: column;
    gap:0;
    
`

function Desktop(){
    
    return(
        <Main>
            <DesktopApp/>
            <AppContainer/>
            <DesktopApp/>
            <DesktopApp/>
        </Main>
    );
}

export default Desktop;