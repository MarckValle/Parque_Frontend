import Swal from "sweetalert2";
import { deleteRegisters } from "../../../../../../utils/api/Dashboard/Registers/registersTable.api";


function DeleteButton( { onDelete, register } ){

    const handleDelete = async (id, registerName) => {
        try {
            const accepted = await Swal.fire({
                title: `¿Estás seguro que deseas eliminar "${registerName}"?`,
                showDenyButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: "Cancelar",
            });
    
            if (accepted.isConfirmed) {
                await deleteRegisters(id); // Llamada a la API para eliminar
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
            onClick={() => handleDelete(register.id, register.name)} // Llama al manejo de eliminación
            className="btn btn-outline-danger"
            >
            Eliminar
        </button>
        </>
    )

}


export default DeleteButton;