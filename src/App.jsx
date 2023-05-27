import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";

function App() {
  const [numClic, setNumeroClic] = useState(0);

  const ManejarClic = () => {
    setNumeroClic(numClic + 1);
  };

  const reiniciarContador = () => {
    setNumeroClic(0);
  };

  return (
    <div className="container">
      <h1>Contador De Clic</h1>
      <div className="bajo">
        <Contador numClic={numClic} />
        <div className="botones">
          
          <Boton texto="Clic" BotonDeClip={true} ManejarClic={ManejarClic} />
          <Boton
            texto="Reiniciar"
            BotonDeClip={false}
            ManejarClic={reiniciarContador}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
