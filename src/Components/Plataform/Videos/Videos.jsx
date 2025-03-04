import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Videos() {
  const location = useLocation();
  const navigate = useNavigate();
  const { video, name } = location.state || {};

  return (
    <div className="container text-center mt-4">
      <h2>{name ? `Video de ${name}` : "No hay video disponible"}</h2>
      
      {video ? (
        <video width="560" height="315" controls>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
        </video>
        ) : (
        <p>No hay video disponible para este animal.</p>
        )}


      <button className="btn btn-primary mt-3" onClick={() => navigate("/flora_fauna/")}>
        Volver
      </button>
    </div>
  );
}

export default Videos;
