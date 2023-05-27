/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from "prop-types";
import "./contador.css"

function Contador({numClic}){
    return(
    <div className="contador">
    {numClic}
    </div>
    );
}

export default Contador