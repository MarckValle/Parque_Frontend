import React from "react";


const Cards = ({ id, tipo, nombre, fecha, descripcion, img }) => {
  return (
    
    <div className="card-validate shadow-sm mb-3">
      <div className="card-body text-center">
        <div className="d-flex align-items-center mb-3">
          <div className="badge-validate rounded-circle text-white">
            {id}
          </div>
          <div className="ms-3 text-start">
            <h6 className="mb-0 fw-bold">Avistamiento</h6>
            <small className="text-muted">{tipo}</small>
          </div>
        </div>

        <div className="bg-light d-flex justify-content-center align-items-center"
            style={{ maxHeight: "200px", borderRadius: "16px", overflow:"hidden" }} >
          <img src={img} alt="" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        </div>

        <div className="mt-3 text-start">
          <h6 className="mb-0 fw-bold">{nombre}</h6>
          <small className="text-muted">{fecha}</small>
          <p className="mt-2 text-muted" style={{ fontSize: "0.9rem" }}>
            {descripcion}
          </p>
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-danger">Eliminar</button>
          <button className="btn btn-success">Aprobar</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
