import styled from 'styled-components';
import { baseColors } from '../../styles/consts';
import { Shadow } from '../../styles/shadow';

const Div = styled(Shadow)`
    position: absolute;
    width:500px;
    height:500px;
    left: 100px;
    top: 100px;
    background-color: ${baseColors.taskBarColor};   
    padding:3px;
`

const Header = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-weight:700px;
    color : ${baseColors.taskBarColor};
    font-size:15px;
    height:20px;
    cursor: grab;
    background-color:${baseColors.darkGray};
`

const HelpBtns = styled.div`
    display:flex;
    gap:2px;
`

const HelpBtn = styled(Shadow)`
    color: black;
    cursor: pointer;
    width:16px;
    height: 16px;
    background-color: ${baseColors.taskBarColor};
    display:flex;
    align-items:center;
`

const Ico = styled.img`
    width:16px;
    height:16px;
`

function AppContainer(){
    return(
        <Div>
            <Header>
                <span style={{marginLeft:'5px'}}>
                    <Ico src='/img/text.png' style={{height:"100%"}}/>
                    Text.txt - Notepad
                </span>
                <HelpBtns>
                    <HelpBtn>
                        <Ico src="/img/first.png"/>
                    </HelpBtn>
                    <HelpBtn>
                        <Ico src="/img/second.png"/>

                    </HelpBtn>
                    <HelpBtn>
                        <Ico src="/img/third.png"/>
                    </HelpBtn>
                </HelpBtns>
        
                
            </Header>
           
        </Div>
    );
}

export default AppContainer;