import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pocetna from './Componnets/Pocetna';
import Ucitaj from './Componnets/Ucitaj';
import Navigacija from './Componnets/Navigacija';
import Dodaj from './Componnets/Dodaj';


function App() {
  return (
    <Router>
      <Navigacija/>
      <Routes>
        <Route path="/" element={<Pocetna/>}/>
        <Route path="/ucitaj" element={<Ucitaj/>}/>
        <Route path='/dodaj' element={<Dodaj/>}/>
      </Routes>
    </Router>

  );
}

export default App;
