import styled from "styled-components";
import { baseColors } from "../../styles/consts";
import StartMenuBtn from "./StartMenuBtn";
import { Shadow } from "../../styles/shadow";
const Div = styled(Shadow)`
    position: absolute;
    z-index: 123;
    bottom: calc(4vh + 4px);
    left:0;
    background-color: ${baseColors.taskBarColor};
    height: 45vh;
    width:20vw;
    border-right:2px solid black;
    border-bottom:2px solid black;
    border-top: 2px solid white;
    border-left: 2px solid white;
    display:flex;
`

const LogoDiv = styled.div`
    height: 100%;
    width: 3vw;
    background-color: ${baseColors.darkGray};
    writing-mode: vertical-lr; 
    text-orientation: unset;
    transform: rotate(180deg); 
    text-transform: capitalize; 
    font-size: 40px;
    color: ${baseColors.taskBarColor};
    font-weight:700;
`

const Span = styled.span`
    color:white;
    font-weight:500;
`

const BtnsDiv = styled.div`
    width:18vw;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

`
const Line = styled.div`
    width: 100%;
    height:2px;
    border-top:2px solid ${baseColors.darkGray};
    border-bottom:2px solid white;

`

function StartMenu() {
    const btn = [
        {name : 'Programs', icon : 'img/programs.png'},
        {name : 'Documents', icon : 'img/documents.png'},
        {name : 'Settings', icon : 'img/settings.png'},
        {name : 'Help', icon : 'img/help.png'},
        {name : 'Help', icon : 'img/help.png'},
        {name : 'Help', icon : 'img/help.png'},
    ]

    return (
    <Div>
        <LogoDiv>Torderonex<Span>95</Span></LogoDiv>
        <BtnsDiv>
            {
                btn.map((item, index) => (
                    <StartMenuBtn name={item.name} icon={item.icon} isDropdown=""/>
                ))
            }
            <Line/>
            <StartMenuBtn onClick={() => window.close()} name={"Shutdown"} icon={"img/shutdown.png"} isDropdown=""/>
        </BtnsDiv>
    </Div>
    );
}

export default StartMenu;