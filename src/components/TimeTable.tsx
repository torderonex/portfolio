import useCurrentTime from "../hooks/useCurrentTime";
import styled from "styled-components";
import { baseColors } from "../styles/consts";

const Div = styled.div`
    margin-right:10px;
    padding: 1px;
    background-color: ${baseColors.taskBarColor};
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    border-top:2px solid black;
    border-left:2px solid black;
`

function TimeTable(){
    const time : string = useCurrentTime(); 
    
    return(
        <Div>
            {time}
        </Div>
    );
}

export default TimeTable;