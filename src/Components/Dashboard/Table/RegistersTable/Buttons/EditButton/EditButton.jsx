import { useState } from "react";
import { createRoot } from "react-dom/client";
import Swal from "sweetalert2";
import SelectType from "../../../../Forms/RegistersForm/Selects/SelectType";
import SelectStatus from "../../../../Forms/RegistersForm/Selects/SelectStatus";
import { updateRegisters } from "../../../../../../utils/api/Dashboard/Registers/registersTable.api";

function EditButton({ onUpdate, register }) {
    // Estado para los valores seleccionados
    const [typeValue, setTypeValue] = useState(register.type_id || "");
    const [statusValue, setStatusValue] = useState(register.status_id || "");

    const handleEdit = async () => {
        const { value: formValues } = await Swal.fire({
            title: "Editar Registro",
            html: `
                <input id="swal-input-name" class="swal2-input" value="${register.name}" placeholder="Nombre">
                <input id="swal-input-scientific_name" class="swal2-input" value="${register.scientific_name}" placeholder="Nombre Científico">
                <input id="swal-input-function" class="swal2-input" value="${register.function}" placeholder="Función">
                <input id="swal-input-description" class="swal2-input" value="${register.description}" placeholder="Descripción">
                <input id="swal-input-distribution" class="swal2-input" value="${register.distribution}" placeholder="Distribución">
                <div id="swal-type-container"></div>
                <div id="swal-status-container"></div>
            `,
            showCancelButton: true,
            confirmButtonText: "Actualizar",
            cancelButtonText: "Cancelar",
            didOpen: () => {
                const typeContainer = document.getElementById("swal-type-container");
                if (typeContainer) {
                    const root = createRoot(typeContainer);
                    root.render(<SelectType onChange={setTypeValue} />);
                }

                const statusContainer = document.getElementById("swal-status-container");
                if (statusContainer) {
                    const root = createRoot(statusContainer);
                    root.render(<SelectStatus onChange={setStatusValue} />);
                }
            },
            preConfirm: () => {
                return {
                    id: register.id, // Se asegura de incluir el ID del registro
                    name: document.getElementById("swal-input-name").value,
                    scientific_name: document.getElementById("swal-input-scientific_name").value,
                    function: document.getElementById("swal-input-function").value,
                    description: document.getElementById("swal-input-description").value,
                    distribution: document.getElementById("swal-input-distribution").value,
                    type_id: typeValue,
                    status_id: statusValue,
                };
            }
        });

        if (formValues) {
            try {
                const response = await updateRegisters(formValues);

                Swal.fire({
                    icon: "success",
                    title: "Actualizado",
                    text: response.data?.message || "El registro ha sido actualizado correctamente"
                });

                onUpdate();
            } catch (error) {
                console.error("Error en la actualización:", error.response ? error.response.data : error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.response?.data?.message || error.response?.data?.error || "No se pudo actualizar el registro"
                });
            }
        }
    };

    return (
        <button className="btn btn-warning" onClick={handleEdit}>
            Editar
        </button>
    );
}

export default EditButton;
