import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';

import Pocetna from './components/Pocetna';
import Navigacija from './components/Navigacija';
import Dodaj from './components/Dodaj';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
    <Navigacija />
    <Routes>
      <Route path='/' element={<Pocetna />}/>
      <Route path='/dodaj' element={<Dodaj />}/>
      <Route path='/edit/:ID' element={<Edit />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
