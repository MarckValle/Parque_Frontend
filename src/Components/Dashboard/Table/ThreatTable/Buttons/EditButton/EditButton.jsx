import { editThreat } from "../../../../../../utils/api/Dashboard/Threat/threat.api";
import Swal from "sweetalert2";

function EditButton({ onUpdate, threat }){
    const handleEdit = async (threat) => {
        const { value: formValues } = await Swal.fire({
            title: "Editar Hábitat",
            html: `
                <input id="swal-input-id" class="swal2-input" value="${threat.id}" placeholder="ID" disabled>
                <input id="swal-input-name" class="swal2-input" value="${threat.name}" placeholder="Nombre del hábitat">
                <input id="swal-input-photo" class="swal2-input" value="${threat.photo}" placeholder="URL de la imagen">
            `,
            showCancelButton: true,
            confirmButtonText: "Actualizar",
            cancelButtonText: "Cancelar",
            preConfirm: () => {
                return {
                    id: document.getElementById("swal-input-id").value,
                    name: document.getElementById("swal-input-name").value,
                    photo: document.getElementById("swal-input-photo").value
                };
            }
        });
    
        if (formValues) {
            try {
                const response = await editThreat(formValues); // Llamar API PUT
    
                console.log("Respuesta del servidor:", response);
    
                Swal.fire({
                    icon: "success",
                    title: "Actualizado",
                    text: response.data?.message || "El hábitat ha sido actualizado correctamente"
                });
            
            onUpdate();
            } catch (error) {
                console.error("Error en la actualización:", error.response ? error.response.data : error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.response?.data?.message || error.response?.data?.error || "No se pudo actualizar el hábitat"
                });
            }
        }
    };
    return (
        <>
        <button 
                className="btn btn-warning"
                onClick={() => handleEdit(threat)}
                
            >
                Editar
        </button>
        </>
    );


}   



export default EditButton;