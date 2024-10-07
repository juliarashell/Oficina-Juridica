import React, { useEffect, useState } from 'react';
import './ChatbotMessage.css';

const ChatbotMessage = () => {
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad del mensaje

  useEffect(() => {
    const currentPath = window.location.pathname.toLowerCase(); // Convertir la ruta a minúsculas
    console.log('Current Path:', currentPath); // Esto mostrará la ruta actual en la consola del navegador

    if (currentPath === '/') { // Ruta de inicio es '/'
      setMessage('Bienvenido, ¿Necesitas ayuda?');
      setMessageClass('inicio');
    } else if (currentPath.includes('/servicios')) {
      setMessage('Agenda tu cita');
      setMessageClass('servicios');
    } else if (currentPath.includes('/contacto')) {
      setMessage('Te esperamos!');
      setMessageClass('contacto');
    }
  }, []);

  // Función para cerrar el mensaje
  const closeMessage = () => {
    setIsVisible(false); // Oculta el mensaje al hacer clic en la "X"
  };

  if (!isVisible) {
    return null; // No mostrar nada si el mensaje está oculto
  }

  return (
    <div className={`chatbot-message ${messageClass}`}>
      <span>{message}</span>
      <button className="close-button" onClick={closeMessage}>X</button> {/* Botón para cerrar */}
    </div>
  );
};

export default ChatbotMessage;
