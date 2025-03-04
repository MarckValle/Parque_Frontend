import React from "react";


const SoundSection = ({ soundUrl }) => {
    
  return (
    <div className="text-center my-4">
      <h4>Conoce su sonido</h4>
      {soundUrl ? (
        <audio controls>
          <source src={soundUrl} type="audio/mpeg" />
          Tu navegador no soporta audio.
        </audio>
      ) : (
        <p>No hay sonido disponible.</p>
      )}
    </div>
  );
};

export default SoundSection;
