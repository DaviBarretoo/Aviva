import React from 'react';
import { Container } from './styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Salmos() {
  toast.info('Você agora esta em Salmos 121');
  return (
    <Container>
      <h2>Salmos 121</h2>
      <p>
        <p>
          <h1>1</h1> Levanto meus olhos para os montes e questiono: de onde me
          virá o socorro?
        </p>

        <p>
          <h1>2</h1> O socorro virá do meu SENHOR, o Criador dos céus e da
          terra!
        </p>

        <p>
          <h1>3</h1> Ele não deixará que teus pés vacilem; não pestaneja Aquele
          que te guarda.
        </p>

        <p>
          <h1>4</h1> Certamente não! De maneira alguma cochila nem dormita o
          guarda de Israel.
        </p>

        <p>
          <h1>5</h1> O Eterno é o teu protetor diuturno; como sombra que te
          guarda, Ele está à tua direita.
        </p>

        <p>
          <h1>6</h1> Não te molestará o sol, durante o dia, nem de noite, a lua.
        </p>

        <p>
          <h1>7</h1> O SENHOR te guardará de todo o mal, Ele protegerá a tua
          vida!
        </p>

        <p>
          <h1>8</h1> Estarás sob a proteção do SENHOR, ao saíres e ao voltares,
          desde agora e para todo o sempre!
        </p>
      </p>
    </Container>
  );
}
