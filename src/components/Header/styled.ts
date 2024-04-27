import styled from 'styled-components';
import { colorOfHeader, blue, lightblue } from '../config/color';

export const Nav = styled.nav`

background: ${colorOfHeader};
width: 100%;
margin: 0 auto;
height: 3rem;
display: flex;
justify-content: space-evenly;
align-items: center;
position: fixed;

box-shadow:  0 0 100px rgba(0, 0, 100 ,0.4);

a{
  font-family: "Jersey 25", sans-serif;
  font-size:1.3rem;
  font-weight: 400;
  font-style: normal;
  color: ${blue};
  text-decoration:none;
  transition: 700ms;
}

a:hover{
  color: ${lightblue};
  font-size:1.5rem;

}
`;
