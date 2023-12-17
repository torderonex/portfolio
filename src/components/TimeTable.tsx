import useCurrentTime from "../hooks/useCurrentTime";
import styled from "styled-components";
import { baseColors } from "../styles/consts";
const Div = styled.div`
    margin-right:5px;
    padding: 1px;
    background-color: ${baseColors.taskBarColor};
    border: 1px solid black;
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