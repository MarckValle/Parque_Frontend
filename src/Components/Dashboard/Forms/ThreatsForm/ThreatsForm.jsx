import React from "react";
import { createThreat } from "../../../../utils/api/Dashboard/Threat/threat.api";
import { useForm } from 'react-hook-form';
import "/src/assets/styles/Dashboard/Forms/Forms.css"
import Swal from 'sweetalert2'

function ThreatsForm({ onAdd }){
    
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        await createThreat(data);
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
        
        onAdd();
    });

    return(
        <div className="form-container">
            <h3 className="text-center">Registra una nueva amenaza</h3>
            <form onSubmit={onSubmit} className="small-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Amenaza</label>
                    <input className="form-control small-input" id="name" type="text" placeholder="Escribe la amenaza" autoComplete="off" {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <button type="submit" className="btn btn-dark btn-block mt-3">Guardar</button>
            </form>
        </div>

    )
};

export default ThreatsForm;