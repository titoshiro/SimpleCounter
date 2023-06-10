import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import { useRef, useState,useEffect } from "react";
import playa from "./componentes/playa.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import audioPlaya from "./componentes/playaAudio.mp3"

function App() {
  const [tiempo, setTiempo] = useState(0);
  let intervalo = null;
  const audio= useRef (null)

  useEffect(() => {
    // Detener la reproducción del audio al agotarse el tiempo
    if (tiempo === 0) {
      audio.current.pause();
      audio.current.currentTime = 0;
    }
  }, [tiempo]); 
//  Esta funcion actualiza el tiempo en el select
  const valorselectchange = (e) => {
    const selectTiempo = e.target.value;
    if (selectTiempo === "0") {
      setTiempo("0");
    } else {
      const parsedTiempo = parseInt(selectTiempo);
      setTiempo(parsedTiempo);
    }
  };
// funcion del boton que inicia el tiempo elegido
  const Iniciar = () => {
    if (intervalo) {
      clearInterval(intervalo);
    }
    intervalo = setInterval(() => {
      setTiempo((nuevoTiempo) => {
        if (nuevoTiempo === 0) {
          clearInterval(intervalo);
          alert("¡Se acabó el tiempo!");
          return 0;
        } else {
          return nuevoTiempo - 1;
        }
      });
    }, 1000);
    audio.current.play();
  };
    // funcion del boton que reinicia
  function Reniciar() {
    if (tiempo !== 0) {
      setTiempo(0);
      clearInterval(intervalo);
      alert("Haz Parado el tiempo, elige nuevamente tu tiempo para descansar");
    } 
  }
  // forma el tiempo y lo muestra en el contador 
  const formarTiempo = new Date(tiempo * 1000).toISOString().substr(11, 8);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="position-relative">
            <img className="w-100 " src={playa} alt="" />
            <div className="w-50 text-center position-absolute top-50 start-50 translate-middle">
              <h1 className="display-5 col-12 text-dark ">
                Elije tu tiempo de Descanso
              </h1>

              <div className="form-floating">
                <select
                  value={tiempo}
                  onChange={valorselectchange}
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Abre y selecciona tu tiempo</option>
                  <option value="60">1 minuto</option>
                  <option value="300">5 minutos</option>
                  <option value="600">10 minutos</option>
                  <option value="1800">30 minutos</option>
                  <option value="3600">1 hora</option>
                </select>
              </div>
              <br />
              <audio ref={audio} src={audioPlaya} />
              <div className="bajo">
                <Contador tiempo={formarTiempo} />
                <div className="botones">
                  <Boton texto="Inicio" BotonDeClip={true} Reloj={Iniciar} />
                  <Boton
                    texto="Parar"
                    BotonDeClip={false}
                    Reloj={Reniciar}
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
