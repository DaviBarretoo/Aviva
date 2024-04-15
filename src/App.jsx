import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/Globalstyle';
import Header from './components/Header/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
