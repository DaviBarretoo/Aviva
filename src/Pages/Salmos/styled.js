import styled from 'styled-components';
import { darkcolor, lightblue, blue } from '../../config/color';

export const Container = styled.nav`
background:${darkcolor};
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
gap: 1rem;
width: 50%;
word-wrap: break-all;

p{
  color: white ;
  font-size:1rem;
font-family:sans-serif;
font-weight:700;
transition: 1200ms;

}


h1{
  color: ${lightblue} ;
  font-family: "Jersey 25", sans-serif;
 margin-bottom:0.4rem;
 margin-top:0.4rem;
}

h1:hover{
  color: ${blue} ;
  font-family: "Jersey 25", sans-serif;
 margin-bottom:0.4rem;
 margin-top:0.4rem;

}

h2{
  color: ${blue} ;
 font-family:sans-serif;
 font-weight:700;
 margin-bottom:1rem;
 margin-top:3rem;
}
`;
