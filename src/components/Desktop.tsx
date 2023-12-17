import styled from "styled-components";
import { baseColors } from "../styles/consts";
import DesktopApp from "./DesktopApp";

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
            <DesktopApp/>
            <DesktopApp/>
            <DesktopApp/>   
            <DesktopApp/>   
        </Main>
    );
}

export default Desktop;