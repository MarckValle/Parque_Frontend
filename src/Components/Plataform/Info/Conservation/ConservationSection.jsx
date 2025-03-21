import React from "react";
import Cards from "../Cards/Card";

const ConservationSection = ({ status, name_threats  }) => {
  return (
    <div className="container">
      <h2 className="text-center">Conservación</h2>
      <div className="validate-container">
        <Cards theme="Estatus" descripcion={status} img="https://parque-nezahualcoyotl.s3.us-east-2.amazonaws.com/Status/semartnat.jpg"></Cards>
        <Cards theme="Amenazas" descripcion={name_threats}  className="align-self-end" img="https://parque-nezahualcoyotl.s3.us-east-2.amazonaws.com/threats/warning.jpg"></Cards>
      </div>
    </div>
  );
};

export default ConservationSection;
