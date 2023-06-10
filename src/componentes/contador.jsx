/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from "prop-types";
import "./contador.css"

function Contador({tiempo}){
    return(
    <div className="contador">
    {tiempo}
    </div>
    );
}

export default Contador