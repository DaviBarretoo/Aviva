import styled from 'styled-components';
import { colorOfHeader, blue, lightblue } from '../../config/color';

export const Nav = styled.nav`

background: ${colorOfHeader};
height: 2rem;
display: flex;
justify-content: space-evenly;
align-items: center;

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
