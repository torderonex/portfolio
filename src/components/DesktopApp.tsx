import styled from "styled-components";

const Div = styled.div`
    width: 17vh;
    height:10vh;
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
    margin-top: -25px;
    text-align: center;
    word-wrap: break-word;
`


function DesktopApp(){
    return(
        <Div>
            <Ico src='/img/text.png'/>
            <Name>Text.txt</Name>
        </Div>
    );
}

export default DesktopApp;