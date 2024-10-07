import React from 'react';
import './Servicios.css';
import BannerPie from '../componentes/BannerPie';
import Chatbot from '../componentes/Chatbot';
import ChatbotMessage from '../componentes/ChatbotMessage';

const Servicios = () => {
  return (
    <div>
      <BannerPie />
      <ChatbotMessage /> {/* Mensaje emergente */}
      
      <div className="main-content"> {/* Contenedor principal */}
      <h1 className="services-titulo">Nuestros Servicios</h1>
  
        {/* Contenedor para los servicios */}
        <div className="services-container">
          <div className="service-box">
            <h2>Abogacía</h2>
            <p>Procesos Penales, Civiles, Laborales, de Familia, Administrativos, entre otros.</p>
          </div>
          <div className="service-box">
            <h2>Notariales</h2>
            <p>Escrituras públicas, contratos, matrimonios, actas notariales, documentos auténticos.</p>
          </div>
          <div className="service-box">
            <h2>Asesorías Legales</h2>
            <p>Ofrecemos asesoría integral para resolver tus dudas legales.</p>
          </div>
          <div className="service-box">
            <h2>Consultorías Legales</h2>
            <p>Brindamos consultoría en temas legales específicos para empresas y particulares.</p>
          </div>
          <div className="service-box">
            <h2>Gestiones Administrativas</h2>
            <p>Asistimos en gestiones ante entidades centralizadas y descentralizadas.</p>
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default Servicios;
