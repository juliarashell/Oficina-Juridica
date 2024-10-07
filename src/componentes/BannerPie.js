import React from 'react';
import './BannerPie.css';

const BannerPie = () => {
  return (
    <div>
      {/* Banner */}
      <header className="banner">
        <img src="./logo.png" alt="logo" className="logo" />
        <div className="banner-text">
          <h1 className="banner-title">Abogado y Notario</h1>
          <h2 className="banner-subtitle">Licenciado Dario López</h2>
        </div>
        <nav className="menu">
          <a href="/">Inicio</a>
          <a href="/servicios">Servicios</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </header>
      
      {/* Pie de página */}
      <footer className="pie-pagina">
        © 2024 Abogado y Notario - Licenciado Dario López
      </footer>
    </div>
  );
};

export default BannerPie;

