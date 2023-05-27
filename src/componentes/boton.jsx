/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from "prop-types";
import "./boton.css"


function Boton({ texto,BotonDeClip,ManejarClic }) {
  
  return (
    <button className={BotonDeClip ? "boton-clic":"boton-reiniciar"} onClick={ManejarClic}>
        {texto}
    </button>
  );
}

export default Boton;
