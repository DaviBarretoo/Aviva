import React from 'react';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './styles/Globalstyle';
import Header from './components/Header/header';
import Routes from './Routes';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </HashRouter>
  );
}

export default App;
