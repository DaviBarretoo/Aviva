import styled from 'styled-components';
import { colorOfHeader, blue, lightblue } from '../../config/color';

export const Nav = styled.nav`

background: ${colorOfHeader};
width: 100%;
height: 3rem;
display: flex;
justify-content: space-evenly;
align-items: center;
position: fixed;
border-bottom-left-radius: 100rem;
border-bottom-right-radius: 100rem;
box-shadow:  0 0 100px rgba(0, 0, 100 ,0.4);

a{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: ${blue};
  text-decoration:none;
  transition: 700ms;
}

a:hover{
  color: ${lightblue};

}
`;
