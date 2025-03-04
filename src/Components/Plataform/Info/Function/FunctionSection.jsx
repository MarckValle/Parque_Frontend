import React from "react";

const FunctionSection = ({ functionText, functionImage }) => {
  return (
    <div className="container my-4">
      <h3 className="text-start">Función ecológica</h3>
      <div className="row">
        <div className="col-md-6">
          <p>{functionText}</p>
        </div>
        <div className="col-md-6">
          <img src={functionImage} className="img-fluid" alt="Función ecológica" />
        </div>
      </div>
    </div>
  );
};

export default FunctionSection;
