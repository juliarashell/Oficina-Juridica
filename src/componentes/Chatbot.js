import React, { useState, useEffect } from 'react'; 
import './Chatbot.css';

const Chatbot = () => {
  const [mostrarChat, setMostrarChat] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);
  const [finalizado, setFinalizado] = useState(false);
  const [escribiendo, setEscribiendo] = useState(false); // Estado para "escribiendo..."
  const [bienvenidaEnviada, setBienvenidaEnviada] = useState(false); // Nuevo estado

  // Función para alternar la ventana del chat
  const toggleChat = () => {
    if (finalizado) {
      setMensajes([]);  // Limpiar mensajes al finalizar la conversación
      setPreguntaSeleccionada(null); // Reiniciar pregunta seleccionada
      setFinalizado(false);  // Resetear estado finalizado
      setBienvenidaEnviada(false); // Resetear estado de bienvenida enviada
    }
    setMostrarChat(!mostrarChat);
  };

  // Función para enviar mensaje del bot
  const enviarMensajeBot = (mensaje, delay = 1000) => {
    setEscribiendo(true);
    setTimeout(() => {
      setMensajes((prevMensajes) => [...prevMensajes, { texto: mensaje, tipo: 'bot' }]);
      setEscribiendo(false); // Ocultar el mensaje de "escribiendo..."
    }, delay);
  };

  // Función para manejar las opciones seleccionadas por el usuario
  const manejarOpcion = (opcion) => {
    setMensajes((prevMensajes) => [...prevMensajes, { texto: opcion, tipo: 'usuario' }]);
    setPreguntaSeleccionada(opcion);
    
    switch (opcion) {
      case 'Horario de atención 🕒':
        enviarMensajeBot('Nuestro horario de atención es de lunes a viernes de 8:00 am a 5:00 pm, y sábados de 8:00 am a 1:00 pm.');
        break;
      case 'Servicios notariales ⚖️':
        enviarMensajeBot('Ofrecemos servicios notariales como autenticación de documentos, escrituras públicas, contratos y más. Para más información comunícate con nosotros por WhatsApp:');
        enviarMensajeBot('<a href="https://wa.me/50251706998?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20notariales">Haz clic aquí para contactarnos por WhatsApp</a>');
        break;
      case 'Agendar cita 🗓️':
        enviarMensajeBot('Para agendar una cita, por favor haz clic en el siguiente enlace para comunicarte con nosotros a través de WhatsApp:');
        enviarMensajeBot('<a href="https://wa.me/50251706998?text=Hola,%20quiero%20agendar%20una%20cita%20con%20el%20Abogado">Haz clic aquí para agendar tu cita por WhatsApp</a>');
        break;
      case 'Ubicación 📍':
        enviarMensajeBot('Nos encontramos ubicados en: Calle Principal Cantón Norte, San Antonio Huista, Huehuetenango, Guatemala. Para llegar a nuestra oficina, puedes seguir las instrucciones en el siguiente enlace:');
        enviarMensajeBot('<a href="https://maps.app.goo.gl/omxPoRyfrhH1y3GP6" target="_blank">Abrir en Google Maps</a>');
        enviarMensajeBot(
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.8304486901147!2d-91.77266402505408!3d15.654014684966993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858c53003375c39f%3A0x8e5618ab084ae7a9!2sOficina%20Jur%C3%ADdica%20Profesional%20Lic.%20Dario%20L%C3%B3pez!5e0!3m2!1ses!2sgt!4v1728152944597!5m2!1ses!2sgt" width="100%" height="200" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'
        );
        break;
      case 'Asesoría legal para empresas 💼':
        enviarMensajeBot('Ofrecemos consultorías legales personalizadas para empresas en cumplimiento normativo. Para más información comunícate con nosotros: ');
        enviarMensajeBot('<a href="https://wa.me/50251706998?text=Hola,%20quiero%20información%20sobre%20la%20asesoría%20legal%20para%20empresas">Haz clic aquí para contactarnos por WhatsApp</a>');
        break;
      default:
        break;
    }

    // Enviar el mensaje "¿Deseas seguir consultando o finalizar la conversación?" sin "escribiendo..."
    setTimeout(() => {
      enviarMensajeBot('¿Deseas seguir consultando o finalizar la conversación?');
    }, 1000);
  };

  // Función para manejar la interacción después de una pregunta
  const manejarInteraccion = (opcion) => {
    if (opcion === 'seguir') {
      setPreguntaSeleccionada(null);  // Mostrar nuevamente las opciones
      setMensajes([]);  // Limpiar los mensajes anteriores

      // Solo enviar los mensajes de bienvenida si no se han enviado antes
      if (!bienvenidaEnviada) {
        setMensajes((prevMensajes) => [...prevMensajes, { texto: 'Bienvenido/a al Asistente Virtual de la Oficina Jurídica 👋', tipo: 'bot' }]);
        setMensajes((prevMensajes) => [...prevMensajes, { texto: '¿Cómo podemos ayudarte? Selecciona una opción:', tipo: 'bot' }]); // Enviar el mensaje sin "escribiendo..."
        setBienvenidaEnviada(true); // Marcar como enviada
      } else {
        // Si ya se han enviado los mensajes de bienvenida, volver a mostrar las opciones
        setMensajes((prevMensajes) => [...prevMensajes, { texto: '¿Cómo podemos ayudarte? Selecciona una opción:', tipo: 'bot' }]); // Enviar el mensaje sin "escribiendo..."
      }
    } else {
      enviarMensajeBot('Gracias por usar nuestro servicio. ¡Hasta luego!');
      setTimeout(() => {
        setMostrarChat(false);  // Ocultar el chat después de finalizar
        setFinalizado(true);  // Marcar la conversación como finalizada
      }, 5000); // Esperar segundos antes de cerrar la ventana
    }
  };

  useEffect(() => {
    if (mostrarChat && mensajes.length === 0 && !preguntaSeleccionada) {
      // Enviar el mensaje de bienvenida solo la primera vez
      if (!bienvenidaEnviada) {
        setMensajes((prevMensajes) => [...prevMensajes, { texto: 'Bienvenido/a al Asistente Virtual de la Oficina Jurídica 👋', tipo: 'bot' }]);
        setMensajes((prevMensajes) => [...prevMensajes, { texto: '¿Cómo podemos ayudarte? Selecciona una opción:', tipo: 'bot' }]); // Enviar el mensaje sin "escribiendo..."
        setBienvenidaEnviada(true); // Marcar como enviada
      }
    }
  }, [mostrarChat, mensajes.length, preguntaSeleccionada, bienvenidaEnviada]); 

  return (
    <div>
  <div className="boton-chat" onClick={toggleChat}>
    <img src="/chat-icon.png" alt="Chatbot Icono" />
  </div>

  {mostrarChat && (
    <div className="ventana-chat">
      <div className="chat-header">
        <img src="/chat-icon.png" alt="Chatbot Icono" className="chatbot-avatar" />
        <h3>Asistente Virtual</h3>
        <button className="cerrar-chat" onClick={toggleChat}>X</button>
      </div>
      <div className="chat-body">
        {mensajes.map((mensaje, index) => (
          <div key={index} className={`mensaje ${mensaje.tipo}`}>
            <p dangerouslySetInnerHTML={{ __html: mensaje.texto }}></p>
            {/* Añadir la colita del mensaje */}
            <div className={`colita ${mensaje.tipo}`}></div>
          </div>
        ))}

        {/* Mostrar el mensaje "escribiendo..." si es necesario */}
        {escribiendo && (
          <div className="mensaje bot escribiendo">
            <p>Escribiendo...</p>
            <div className="colita bot"></div>
          </div>
        )}

        {!preguntaSeleccionada && (
          <ul className="opciones-chat">
            <li onClick={() => manejarOpcion('Horario de atención 🕒')}>Horario de atención 🕒</li>
            <li onClick={() => manejarOpcion('Servicios notariales ⚖️')}>Servicios notariales ⚖️</li>
            <li onClick={() => manejarOpcion('Agendar cita 🗓️')}>Agendar cita 🗓️</li>
            <li onClick={() => manejarOpcion('Ubicación 📍')}>Ubicación 📍</li>
            <li onClick={() => manejarOpcion('Asesoría legal para empresas 💼')}>Asesoría legal para empresas 💼</li>
          </ul>
        )}

        {preguntaSeleccionada && !finalizado && (
          <div className="finalizar-chat">
            <button onClick={() => manejarInteraccion('seguir')}>Seguir Consultando</button>
            <button onClick={() => manejarInteraccion('finalizar')}>Finalizar</button>
          </div>
        )}
      </div>
    </div>
  )}
</div>
);
};

export default Chatbot;
