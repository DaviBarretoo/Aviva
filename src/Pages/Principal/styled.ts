import styled from 'styled-components';
import { blue } from '../../components/config/color';
import background from '../../components/img/backgroundprincipal.svg';

export const Container = styled.nav`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
background-size: cover;
    background-position: center center;
justify-content: center;
background-image:url(${background});

h1{
  font-family: "Jersey 25", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${blue} ;
  font-size:7rem;


}

h1:hover{
  font-family: "Jersey 25", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${blue} ;
  font-size:9rem;
}
`;
