import { editHabitat } from "../../../../../../utils/api/Dashboard/Habitat/habitat.api";
import { useState } from "react";
import Swal from "sweetalert2";


function EditButton({ onUpdate, habitat }) {
    const handleEdit = async (habitat) => {
        let newImageFile = null;
        let imagePreview = habitat.photo;

        const { value: formValues } = await Swal.fire({
            title: "Editar Hábitat",
            html: `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <img id="swal-image-preview" src="${habitat.photo}" alt="Vista previa" 
                         style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; border: 1px solid #ccc;">
                    <input id="swal-input-id" class="swal2-input" value="${habitat.id}" placeholder="ID" disabled>
                    <input id="swal-input-name" class="swal2-input" value="${habitat.name}" placeholder="Nombre del hábitat">
                    <input id="swal-input-photo" class="swal2-input" value="${habitat.photo}" placeholder="URL actual" hidden>
                    <label for="swal-file-input" style="font-size:14px;">Subir nueva imagen:</label>
                    <input id="swal-file-input" type="file" accept="image/*" class="swal2-file">
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: "Actualizar",
            cancelButtonText: "Cancelar",
            didOpen: () => {
                const fileInput = document.getElementById("swal-file-input");
                const previewImg = document.getElementById("swal-image-preview");

                fileInput.addEventListener("change", (event) => {
                    const file = event.target.files[0];
                    if (file) {
                        newImageFile = file;
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            imagePreview = e.target.result;
                            previewImg.src = imagePreview;
                        };
                        reader.readAsDataURL(file);
                    }
                });
            },
            preConfirm: () => {
                return {
                    id: document.getElementById("swal-input-id").value,
                    name: document.getElementById("swal-input-name").value,
                    photo: document.getElementById("swal-input-photo").value,
                    newImageFile
                };
            }
        });

        if (formValues) {
            try {
                // Crear el FormData para enviar texto + archivo
                const formData = new FormData();
                formData.append("id", formValues.id);
                formData.append("name", formValues.name);

                // Si se sube una nueva imagen, se envía el archivo
                if (formValues.newImageFile) {
                    formData.append("photo", formValues.newImageFile);
                } else {
                    formData.append("photo", formValues.photo);
                }

                const response = await editHabitat(formData); // <- tu API debe aceptar multipart/form-data

                Swal.fire({
                    icon: "success",
                    title: "Actualizado",
                    text: response.data?.message || "El hábitat ha sido actualizado correctamente",
                    timer: 2500,
                    showConfirmButton: false
                });

                onUpdate();
            } catch (error) {
                console.error("Error en la actualización:", error.response ? error.response.data : error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text:
                        error.response?.data?.message ||
                        error.response?.data?.error ||
                        "No se pudo actualizar el hábitat"
                });
            }
        }
    };

    return (
        <button className="btn btn-warning" onClick={() => handleEdit(habitat)}>
            Editar
        </button>
    );
}

export default EditButton;
