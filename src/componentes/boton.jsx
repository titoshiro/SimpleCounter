/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./boton.css"
import "bootstrap/dist/css/bootstrap.min.css";


function Boton({ texto,BotonDeClip,Reloj }) {
  
  return (
    <button className={BotonDeClip ? "boton-inicio":"boton-parar"} onClick={Reloj}>
        {texto}
    </button>
  );
}

export default Boton;
