import { useState } from 'react'

import viteLogo from '/vite.svg'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Header from './components/header';

function App() {
  

  return (
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
