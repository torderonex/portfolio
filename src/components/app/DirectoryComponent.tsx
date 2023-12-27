import type {App} from '../../types/App';
import styled from 'styled-components'
import DesktopApp from '../DesktopApp';
import { alterShadow } from '../../styles/shadow';

const Div = styled.div`
    display:flex;
    width: calc(100% - 4px);
    height: calc(100% - 50px);
    background-color:white;
    gap:20px;
    flex-wrap:wrap;
    ${alterShadow}
    overflow: hidden;
`
interface props{
    apps : App[]
}

export default function Directory({apps} : props) {
  return (
    <Div>
        {apps.map(e => (
            <DesktopApp key={Math.random()} app={e}/>
        ))}
    </Div>
    );
}
