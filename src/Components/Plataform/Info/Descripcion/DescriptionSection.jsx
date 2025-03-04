import React from "react";

const DescriptionSection = ({ image, description }) => {
  return (
    <div className="container my-4">
      <h3>Descripción</h3>
      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid" alt="Animal" />
        </div>
        <div className="col-md-8">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
