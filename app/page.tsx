"use client";
import { useState } from "react";

export default function Home() {
  const [resultado, setResultado] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [indiceJugador, setIndiceJugador] = useState(0);

  const jugadores = [
    {
      nombre: "Cristiano Ronaldo",
      imagen:
        "https://media.gq.com.mx/photos/66774829c12a54a09ddc8b23/4:3/w_2680,h_2010,c_limit/Cristiano%20Ronaldo.jpg",
      respuestasValidas: [
        "cristiano ronaldo",
        "ronaldo",
        "cr7",
        "cristiano",
      ],
    },
    {
      nombre: "Lionel Messi",
      imagen:
        "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg",
      respuestasValidas: [
        "lionel messi",
        "messi",
        "leo",
        "pulga",
      ],
    },
    {
      nombre: "Neymar Jr",
      imagen:"https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg",
      respuestasValidas: [
        "neymar jr",
        "neymar",
        "neymar da silva santos júnior",
      ],
    },
    {
      nombre: "Kylian Mbappé",
      imagen:"https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0fce/live/19d35320-165f-11f1-b1a8-d97a7a8b24a4.jpg",
      respuestasValidas: [
        "kylian mbappé",
        "mbappé",
        "mbappe",
      ],
    },
    {
      nombre : "Andre Pierre Gignac",
      imagen:"https://cadenapolitica.com/wp-content/uploads/2026/04/Gignac.jpg",
      respuestasValidas: [
        "andre pierre gignac",
        "gignac",
      ],
    }
  
    
  ];

  const jugadorActual = jugadores[indiceJugador];

  const verificarRespuesta = () => {
    const respuestaUsuario = respuesta.trim().toLowerCase();
    

    if (jugadorActual.respuestasValidas.includes(respuestaUsuario)) {
      setResultado("Correcto");
    } else {
      setResultado("Incorrecto");
    }
  };
  
const siguienteJugador = () => {
  if (jugadores.length <= 1) return;

  let nuevoIndice;

  do {
    nuevoIndice = Math.floor(Math.random() * jugadores.length);
  } while (nuevoIndice === indiceJugador);

  setIndiceJugador(nuevoIndice);
  setRespuesta("");
  setResultado("");
};

  return (
    <main className = "contenedor">
    <div className="tarjeta">
      <h1>Adivina al Futbolista</h1>
      <p className="subtitulo">Te crees capas de adivinar</p>

      <img 
        src={jugadorActual.imagen}
        alt="Imagen del jugador"
        className="imagen-jugador"
      /> 

      <p className= "pregunta">Quien es este Jugador/Futbolista</p>

      <input
        type="text"
        placeholder="Escribe tu respuesta aquí"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        className="input-respuesta"
      />

      <div className="botones">
        <button onClick={verificarRespuesta}>
          Verificar
        </button>
        <button onClick={siguienteJugador}>
          Siguiente
        </button>
      </div>

      <p className="resultado">{resultado}</p>
    </div>
    </main>
  );
}


