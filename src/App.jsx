import React from 'react';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './styles/Globalstyle';
import Header from './components/Header/header';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </HashRouter>
  );
}

export default App;
