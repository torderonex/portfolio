import { createGlobalStyle } from 'styled-components'
import { baseColors } from './consts'
export default createGlobalStyle`
   @font-face {
    font-family: 'W95FA';
    src: local('W95FA'), url('../fonts/W95FA.otf') format('opentype');
    font-style: normal;
    font-weight: normal;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'W95FA';
  }

  body{
    height: 100%;

  }
`;