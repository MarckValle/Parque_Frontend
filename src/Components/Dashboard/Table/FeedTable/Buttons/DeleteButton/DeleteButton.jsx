import Swal from "sweetalert2";
import { deleteFeed } from "../../../../../../utils/api/Dashboard/Feed/feed.api";


function DeleteButton( { onDelete, feed } ){

    const handleDelete = async (id, feedName) => {
        try {
            const accepted = await Swal.fire({
                title: `¿Estás seguro que deseas eliminar "${feedName}"?`,
                showDenyButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: "Cancelar",
            });
    
            if (accepted.isConfirmed) {
                await deleteFeed(id); // Llamada a la API para eliminar
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
            onClick={() => handleDelete(feed.id, feed.name)} // Llama al manejo de eliminación
            className="btn btn-outline-danger"
            >
            Eliminar
        </button>
        </>
    )

}


export default DeleteButton;