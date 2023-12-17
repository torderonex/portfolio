import styled from "styled-components";
import { baseColors } from "../styles/consts";
import TimeTable from "./TimeTable";
import { useState } from "react";
import StartMenu from "./start-menu/StartMenu";
const Footer = styled.footer`
    width: 100%;
    background-color: ${baseColors.taskBarColor};
    position: absolute;
    bottom : 0;
    height: 5vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-top:1px solid white;
`;

const Img = styled.img`
    height: 80%;
    margin-left:3px;
    margin-top:3px;
`

function TaskBar() {
    const [isOpen, setIsOpen ] = useState<boolean>(false);
    return (
        <Footer>
            <Img onClick={() => setIsOpen(!isOpen)} src="./img/startbtn.jpg"/>
            {isOpen && <StartMenu/>}
            <TimeTable/>
        </Footer>
    );
}

export default TaskBar;
