import Swal from "sweetalert2";
import { deleteStatus } from "../../../../../../utils/api/Dashboard/Status/status.api";


function DeleteButton( { onDelete, status } ){

    const handleDelete = async (id, statusName) => {
        try {
            const accepted = await Swal.fire({
                title: `¿Estás seguro que deseas eliminar "${statusName}"?`,
                showDenyButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: "Cancelar",
            });
    
            if (accepted.isConfirmed) {
                await deleteStatus(id); // Llamada a la API para eliminar
                Swal.fire({
                    icon: "success",
                    title: "Eliminado",
                    text: "El registro ha sido eliminado correctamente",
                });
            onDelete();    
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `No se pudo eliminar el registro: ${err.message}`,
            });
        }
    };

    return(
        <>
        <button
            onClick={() => handleDelete(status.id, status.status)} // Llama al manejo de eliminación
            className="btn btn-outline-danger"
            >
            Eliminar
        </button>
        </>
    )

}


export default DeleteButton;