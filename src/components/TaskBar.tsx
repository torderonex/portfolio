import styled from "styled-components";
import { baseColors } from "@/styles/consts";
import TimeTable from "./TimeTable";
const Footer = styled.footer`
    width: 100%;
    background-color: ${baseColors.taskBarColor};
    position: absolute;
    bottom : 0;
    height: 3.5%;
    align-items: center;
    display: flex;
`;

const Img = styled.img`
    height: 80%;
    margin-left:3px;
    margin-top:3px;

`

function TaskBar() {
    return (
        <Footer>
            <Img src="./img/startbtn.jpg"/>
            <TimeTable/>
        </Footer>
    );
}

export default TaskBar;
