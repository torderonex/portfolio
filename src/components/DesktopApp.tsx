import styled from "styled-components";
import { App } from "../types/App";
import { useContext } from "react";
import { Context } from "..";

const Div = styled.div`
    width: 10vh;
    margin-top:10px;
    cursor: pointer;
`
const Ico = styled.img`
    width: 100%;
    object-fit: cover;
    margin : 0;
    padding:0;
`
const Name = styled.p`
    font-size: 100%;
    text-align: center;
    word-wrap: break-word;
`

interface props{
    app : App
}

function DesktopApp({app} : props){
    const {store} = useContext(Context);
    
    function openHandler(){
        store.openApp(app);
    }
    
    return(
        <Div onClick={openHandler}>
            <Ico src={app.ico}/>
            <Name>{app.name}</Name>
        </Div>
    );
}

export default DesktopApp;