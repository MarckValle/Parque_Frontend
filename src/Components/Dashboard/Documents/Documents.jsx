import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// Componente para mostrar documentos de un registro
const Documents = ({ register }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('fotos');

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Función para renderizar el contenido según la pestaña activa
  const renderContent = () => {
    switch (activeTab) {
      case 'fotos':
        return (
          <div className="document-container">
            {register.photos && register.photos.length > 0 ? (
              <div className="photo-gallery">
                {register.photos.map((photo, index) => (
                  <div key={index} className="photo-item">
                    <img 
                      src={photo.url} 
                      alt={`Fotografía ${index + 1} de ${register.name}`} 
                      className="img-fluid rounded" 
                    />
                    <p className="mt-2">{photo.description || `Fotografía ${index + 1}`}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">No hay fotografías disponibles para este registro.</p>
            )}
          </div>
        );
      
      case 'sonidos':
        return (
          <div className="document-container">
            {register.sounds && register.sounds.length > 0 ? (
              <div className="sound-list">
                {register.sounds.map((sound, index) => (
                  <div key={index} className="sound-item mb-3">
                    <p>{sound.description || `Sonido ${index + 1}`}</p>
                    <audio controls className="w-100">
                      <source src={sound.url} type="audio/mpeg" />
                      Tu navegador no soporta el elemento de audio.
                    </audio>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">No hay archivos de sonido disponibles para este registro.</p>
            )}
          </div>
        );
      
      case 'videos':
        return (
          <div className="document-container">
            {register.videos && register.videos.length > 0 ? (
              <div className="video-list">
                {register.videos.map((video, index) => (
                  <div key={index} className="video-item mb-4">
                    <p>{video.description || `Video ${index + 1}`}</p>
                    <div className="video-wrapper">
                      <video controls className="w-100">
                        <source src={video.url} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">No hay videos disponibles para este registro.</p>
            )}
          </div>
        );
      
      default:
        return <p className="text-center">Selecciona una categoría para ver los documentos.</p>;
    }
  };

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        Ver documentos
      </Button>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Documentos de {register.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'fotos' ? 'active' : ''}`} 
                onClick={() => setActiveTab('fotos')}
              >
                Fotografías
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'sonidos' ? 'active' : ''}`} 
                onClick={() => setActiveTab('sonidos')}
              >
                Sonidos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`} 
                onClick={() => setActiveTab('videos')}
              >
                Videos
              </button>
            </li>
          </ul>
          
          {renderContent()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Documents;