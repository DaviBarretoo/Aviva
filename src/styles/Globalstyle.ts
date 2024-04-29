import { createGlobalStyle } from 'styled-components';
//import { darkcolor } from '../config/color';
//import back1 from '../img/back1.svg'
export default createGlobalStyle`
*{
margin: 0;
padding: 0;
outline: 0;
box-sizing:border-box
}
body{

background-size: cover;
background-position: center center;
background: rgb(2,0,36);
background-attachment: fixed;
}
html,body, #root{
  height: 100vh;
}

`;
