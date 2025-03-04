import React from "react";
import { createStatus } from "../../../../utils/api/Dashboard/Status/status.api";
import { useForm } from 'react-hook-form';
import "/src/assets/styles/Dashboard/Forms/Forms.css"
import Swal from 'sweetalert2'

function StatusForm({ onAdd }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        await createStatus(data);
        reset();

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Se ha agregado correctamente"
        });

        // Llamar a la función de refrescar
        onAdd();
    });

    return (
        <div className="form-container">
            <h3 className="text-center">Registra nuevos estatus</h3>
            <form onSubmit={onSubmit} className="small-form">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Escribe el estatus"
                        autoComplete="off"
                        {...register("status", { required: true })}
                    />
                    {errors.status && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <button type="submit" className="btn btn-dark btn-block mt-3">
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default StatusForm;
