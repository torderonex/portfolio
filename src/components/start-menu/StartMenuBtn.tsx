import styled from "styled-components";
import { baseColors } from "../../styles/consts";

const Div = styled.div`
    display:flex;
    width:100%;
    height:14%;
    vertical-align:middle;
    &:hover{
        background-color: ${baseColors.windowsBlue};
        color: white;
    }
`

const Text = styled.p`
    padding: 10px 0;
    margin-left: 15px;
`

const Ico = styled.img`
    margin-left:    5px;
`

const Span = styled.span`
    text-decoration:underline;
    text-transform: uppercase;
`

interface props{
    name : string;
    icon : string;
    isDropdown : string;
    onClick? : (e :  React.MouseEvent<HTMLDivElement>) => void;
}

function StartMenuBtn({name,icon,isDropdown, onClick} : props){
    return(
        <Div onClick={onClick}>
            <Ico src={icon}/>
            <Text>
                <Span>{name[0]}</Span>{name.substring(1)}
            </Text>
        </Div>
    );
}

export default StartMenuBtn;