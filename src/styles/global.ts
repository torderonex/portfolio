import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   @font-face {
    font-family: 'W95FA';
    src: local('W95FA'), url('/fonts/W95FA.otf') format('opentype');
    font-style: normal;
    font-weight: normal;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'W95FA', monospace;
    image-rendering:pixelated;
  }
  
  body{
    min-width:1440px;
    overflow:hidden;  
    height: 100%;
    
  }
`;