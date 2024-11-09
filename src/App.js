import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Inicio from './paginas/Inicio';
import Servicios from './paginas/Servicios';
import Contacto from './paginas/Contacto';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Analytics /> {/* Agrega Analytics aquí */}
    </Router>
  );
}

export default App;
