import Swal from "sweetalert2";
import { deleteUsers } from "../../../../../../utils/api/Dashboard/Users/users.api";

function DeleteButton( { onDelete, users } ){

    const handleDelete = async (id, usersName) => {
        try {
            const accepted = await Swal.fire({
                title: `¿Estás seguro que deseas eliminar "${usersName}"?`,
                showDenyButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: "Cancelar",
            });
    
            if (accepted.isConfirmed) {
                await deleteUsers(id); // Llamada a la API para eliminar
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
            onClick={() => handleDelete(users.id, users.first_name)} // Llama al manejo de eliminación
            className="btn btn-outline-danger"
            >
            Eliminar
        </button>
        </>
    )

}


export default DeleteButton;