import React from "react";
import Cards from "../Cards/Card";

const ConservationSection = ({ status, name_threats  }) => {
  return (
    <div className="container">
      <h2 className="text-center">Conservación</h2>
      <div className="validate-container">
        <Cards theme="Estatus" descripcion={status} img="http://192.168.100.36:9000/bucket-park/Estatus%2Fsemartnat.jpg"></Cards>
        <Cards theme="Amenazas" descripcion={name_threats}  className="align-self-end" img="http://192.168.100.36:9000/bucket-park/Amenazas/warning.jpg"></Cards>
      </div>
    </div>
  );
};

export default ConservationSection;
