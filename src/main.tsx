import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/header'
import {Routes,Route, HashRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Mateus from './Pages/Mateus';
import Principal from './Pages/Principal';
import Globalstyle from './styles/Globalstyle';
import Salmos from './Pages/Salmos';
import Proverbios from './Pages/Proverbios';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <HashRouter>
    <Header/>
    <Globalstyle />
    <Routes>
    
    <Route path='/' element={<Principal />}/>
    <Route path='/Aviva/Mateus' element={<Mateus />}/>
    <Route path='/Aviva/Salmos' element={<Salmos />}/>
    <Route path='/Aviva/Proverbios' element={<Proverbios />}/>
    </Routes>
    </HashRouter>
    <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </React.StrictMode>,
)
