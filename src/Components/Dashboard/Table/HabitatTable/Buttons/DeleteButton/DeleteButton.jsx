import Swal from "sweetalert2";
import { deleteHabitat } from "../../../../../../utils/api/Dashboard/Habitat/habitat.api";


function DeleteButton( { onDelete, habitat } ){

    const handleDelete = async (id, habitatName) => {
        try {
            const accepted = await Swal.fire({
                title: `¿Estás seguro que deseas eliminar "${habitatName}"?`,
                showDenyButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: "Cancelar",
            });
    
            if (accepted.isConfirmed) {
                await deleteHabitat(id); // Llamada a la API para eliminar
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
            onClick={() => handleDelete(habitat.id, habitat.name)} // Llama al manejo de eliminación
            className="btn btn-outline-danger"
            >
            Eliminar
        </button>
        </>
    )

}


export default DeleteButton;