import useCurrentTime from "../hooks/useCurrentTime";
import styled from "styled-components";
import { baseColors } from "@/styles/consts";
const Div = styled.div`
`

function TimeTable(){
    const time : string = useCurrentTime(); 
    
    return(
        <div>
            {time}
        </div>
    );
}

export default TimeTable;