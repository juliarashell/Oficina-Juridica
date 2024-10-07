import React from 'react';
import './Inicio.css';
import '../App.css';
import BannerPie from '../componentes/BannerPie';
import Chatbot from '../componentes/Chatbot';
import ChatbotMessage from '../componentes/ChatbotMessage';

const Inicio = () => {
  return (
    <div>
      <BannerPie />
      <ChatbotMessage /> {/* Mensaje emergente */}
      
      <div className="main-content"> {/* Contenedor principal */}
        {/* Título y lema fuera de cualquier contenedor */}
        <h1 className="inicio-titulo">Oficina Jurídica Profesional</h1>
        <h2 className="inicio-lema">Tu confianza, nuestro compromiso</h2>

        {/* Contenedor para misión, visión, objetivos y valores */}
        <div className="info-container">
          <div className="info-box">
            <h2>Misión</h2>
            <p>Ofrecer soluciones legales precisas y efectivas, con integridad y ética.</p>
          </div>
          <div className="info-box">
            <h2>Visión</h2>
            <p>Ser el asesor legal en el que las personas confían para resolver problemas de manera justa y profesional.</p>
          </div>
          <div className="info-box">
            <h2>Objetivos</h2>
            <ul>
              <li>Prestar Servicios Jurídicos De Alta Calidad</li>
              <li>Otorgar Asesoría y Consultoría en Materia Legal</li>
              <li>Contribuir Al Acceso A La Justicia</li>
            </ul>
          </div>
          <div className="info-box">
            <h2>Valores</h2>
            <ul>
              <li>Confidencialidad</li>
              <li>Profesionalismo</li>
              <li>Compromiso</li>
              <li>Excelencia</li>
              <li>Empatía</li>
            </ul>
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default Inicio;