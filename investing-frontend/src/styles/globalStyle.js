import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }

  html {
    body {
      font-size: 16px;
    }
    
    button {
      cursor: pointer;
      margin: 0;
      border: 0;
      display: inline-flex;
      outline: 0;
      padding: 0;
      position: relative;
      align-items: center;
      border-radius: 0;
      user-select: none;
      justify-content: center;
      background-color: transparent;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

export default GlobalStyle;
