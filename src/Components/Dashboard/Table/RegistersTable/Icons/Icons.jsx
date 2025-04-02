import React from "react";
import Swal from "sweetalert2";
import '/src/assets/styles/Dashboard/Modal/Modal.css'
function Icons({ data, img, type, register }) {
    const handleShow = () => {
        if (data) {
            // Preparar el contenido según el tipo
            const content = renderContent();
            
            // Configuración del título según el tipo
            const title = getModalTitle();
            
            // Abrir SweetAlert2 con el contenido
            Swal.fire({
                title: title,
                html: content,
                width: '800px',
                showCloseButton: true,
                showConfirmButton: false,
                customClass: {
                    container: 'swal-wide',
                    popup: 'swal-large-content'
                }
            });
        }
    };

    // Función para renderizar el contenido HTML para SweetAlert2
    const renderContent = () => {
        switch (type) {
            case 'photo':
                if (register.photo) {
                    return `
                        <div class="document-container">
                            <div class="photo-gallery">
                                <div class="photo-item mb-4">
                                    <img 
                                        src="${register.photo}" 
                                        alt="Fotografía de ${register.name}" 
                                        class="img-fluid rounded" 
                                        style="max-width: 100%; margin-bottom: 10px;" 
                                    />
                                    <p class="mt-2">Fotografía de ${register.name}</p>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    return `<p class="text-center">No hay fotografías disponibles para este registro.</p>`;
                }
            
            case 'sound':
                if (register.sound) {
                    return `
                        <div class="document-container">
                            <div class="sound-list">
                                <div class="sound-item mb-3">
                                    <p>Sonido de ${register.name}</p>
                                    <audio controls class="w-100" style="width: 100%; margin-bottom: 15px;">
                                        <source src="${register.sound}" type="audio/mpeg" />
                                        Tu navegador no soporta el elemento de audio.
                                    </audio>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    return `<p class="text-center">No hay archivos de sonido disponibles para este registro.</p>`;
                }
            
            case 'video':
                if (register.video) {
                    return `
                        <div class="document-container">
                            <div class="video-list">
                                <div class="video-item mb-4">
                                    <p>Video de ${register.name}</p>
                                    <div class="video-wrapper">
                                        <video controls class="w-100" style="width: 100%; margin-bottom: 15px;">
                                            <source src="${register.video}" type="video/mp4" />
                                            Tu navegador no soporta el elemento de video.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    return `<p class="text-center">No hay videos disponibles para este registro.</p>`;
                }
            
            default:
                return `<p class="text-center">No hay contenido para mostrar.</p>`;
        }
    };

    // Título del modal según el tipo
    const getModalTitle = () => {
        switch (type) {
            case 'photo':
                return `Fotografías de ${register.name}`;
            case 'sound':
                return `Archivos de sonido de ${register.name}`;
            case 'video':
                return `Videos de ${register.name}`;
            default:
                return `Documentos de ${register.name}`;
        }
    };

    return (
        <div>
            <button 
                className={`btn ${data ? "" : "disabled"}`}
                disabled={!data}
                onClick={handleShow}
                style={{
                    maxWidth: "50px",
                    objectFit: "contain",
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                    opacity: data ? 1 : 0.5,
                    cursor: data ? "pointer" : "not-allowed",
                }}
            >
                <img
                    src={img}
                    alt="icon"
                    style={{
                        maxWidth: "30px",
                        objectFit: "contain",
                    }}
                />
            </button>
        </div>
    );
}

export default Icons;