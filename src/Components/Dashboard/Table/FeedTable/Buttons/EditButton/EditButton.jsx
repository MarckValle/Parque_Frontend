import { editFeed } from "../../../../../../utils/api/Dashboard/Feed/feed.api";
import Swal from "sweetalert2";

function EditButton({ onUpdate, feed }) {
    const handleEdit = async (feed) => {
        let newImageFile = null;
        let imagePreview = feed.photo;

        const { value: formValues } = await Swal.fire({
            title: "Editar Hábitat",
            html: `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <img id="swal-image-preview" src="${feed.photo}" alt="Vista previa"
                        style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid #ccc;">
                    
                    <input id="swal-input-id" class="swal2-input" value="${feed.id}" placeholder="ID" disabled>
                    <input id="swal-input-name" class="swal2-input" value="${feed.name}" placeholder="Nombre del hábitat">

                    <!-- Campo oculto con la URL actual -->
                    <input id="swal-input-photo" type="hidden" value="${feed.photo}">

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
                // Crear FormData (soporta texto y archivos)
                const formData = new FormData();
                formData.append("id", formValues.id);
                formData.append("name", formValues.name);

                if (formValues.newImageFile) {
                    formData.append("photo", formValues.newImageFile);
                } else {
                    formData.append("photo", formValues.photo);
                }

                const response = await editFeed(formData); // Tu API debe aceptar multipart/form-data

                Swal.fire({
                    icon: "success",
                    title: "Actualizado",
                    text: response.data?.message || "El hábitat ha sido actualizado correctamente",
                    timer: 2500,
                    showConfirmButton: false,
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
                        "No se pudo actualizar el hábitat",
                });
            }
        }
    };

    return (
        <button className="btn btn-warning" onClick={() => handleEdit(feed)}>
            Editar
        </button>
    );
}

export default EditButton;
