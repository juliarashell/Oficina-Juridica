import React from 'react';
import './Contacto.css';
import BannerPie from '../componentes/BannerPie';
import Chatbot from '../componentes/Chatbot';
import ChatbotMessage from '../componentes/ChatbotMessage';

const Contacto = () => {
  return (
    <div>
      <BannerPie />
      <ChatbotMessage /> {/* Mensaje emergente */}
      
      <div className="main-content">
      <h1 className="contacto-titulo">Contáctanos!</h1>

        {/* Contenedor de contacto con flexbox */}
        <div className="contact-container">
          {/* Mapa interactivo a la izquierda */}
          <div className="contact-map">
            <iframe
              title="Mapa de Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30732.688986400008!2d-91.81146731523438!3d15.667012663476566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858c53003375c39f%3A0x8e5618ab084ae7a9!2sOficina%20Jur%C3%ADdica%20Profesional%20Lic.%20Dario%20L%C3%B3pez!5e0!3m2!1ses!2sgt!4v1727683072258!5m2!1ses!2sgt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="contact-info"> {/* Sección de información */}
            <div className="contact-box">
              <h2>Dirección</h2>
              <p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=San+Antonio+Huista,+Huehuetenango,+Guatemala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  San Antonio Huista, Huehuetenango, Guatemala.
                </a>
              </p>
            </div>
            <div className="contact-box">
              <h2>E-mail</h2>
              <p>
                <a href="mailto:dariolopezh@hotmail.com">dariolopezh@hotmail.com</a>
              </p>
            </div>
            <div className="contact-box">
              <h2>Teléfono</h2>
              <p>
                <a href="tel:+50277804384">(+502) 7780 4384</a>
              </p>
            </div>
            <div className="contact-box">
              <h2>WhatsApp</h2>
              <p>
                <a href="https://wa.me/50258568409">(+502) 5856 8409</a>,{' '}
                <a href="https://wa.me/50251706998">(+502) 5170 6998</a>
              </p>
            </div>
            <div className="contact-box">
              <h2>Horario de Atención</h2>
              <p>
                Lunes a Viernes: 8:00 am - 5:00 pm<br />
                Sábado: 8:00 am - 1:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  );
};

export default Contacto;