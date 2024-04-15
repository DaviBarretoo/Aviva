import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/Globalstyle';
import Header from './components/Header/header';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
