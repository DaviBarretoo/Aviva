import { createGlobalStyle } from 'styled-components';
import { darkcolor } from '../config/color';

export default createGlobalStyle`
*{
margin: 0;
padding: 0;
outline: 0;
box-sizing:border-box
}
body{

  background: ${darkcolor};
}
html,body, #root{
  height: 100vh;
}

`;
