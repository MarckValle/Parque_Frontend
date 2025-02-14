import { editStatus } from "../../../../../../utils/api/Dashboard/Status/status.api";
import Swal from "sweetalert2";

function EditButton({ onUpdate, status }){
    const handleEdit = async (status) => {
        const { value: formValues } = await Swal.fire({
            title: "Editar Estatus",
            html: `
                <input id="swal-input-id" class="swal2-input disable" value="${status.id}" placeholder="ID" disabled>
                <input id="swal-input-name" class="swal2-input" value="${status.status}" placeholder="Estatus">
            `,
            showCancelButton: true,
            confirmButtonText: "Actualizar",
            cancelButtonText: "Cancelar",
            preConfirm: () => {
                return {
                    id: document.getElementById("swal-input-id").value,
                    name: document.getElementById("swal-input-name").value,
                };
            }
        });
    
        if (formValues) {
            try {
                const response = await editStatus(formValues); // Llamar API PUT
    
                console.log("Respuesta del servidor:", response);
    
                Swal.fire({
                    icon: "success",
                    title: "Actualizado",
                    text: response.data?.message || "El Estatus ha sido actualizado correctamente"
                });
            
            onUpdate();
            } catch (error) {
                console.error("Error en la actualización:", error.response ? error.response.data : error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.response?.data?.message || error.response?.data?.error || "No se pudo actualizar el estatus"
                });
            }
        }
    };
    return (
        <>
        <button 
                className="btn btn-warning"
                onClick={() => handleEdit(status)}
                
            >
                Editar
        </button>
        </>
    );


}   



export default EditButton;