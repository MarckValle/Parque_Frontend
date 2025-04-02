import React from "react";
import { createHabitat } from "../../../../utils/api/Dashboard/Habitat/habitat.api";
import { useForm } from 'react-hook-form';
import "/src/assets/styles/Dashboard/Forms/Forms.css"
import Swal from 'sweetalert2'

function HabitatForm({ onAdd }){
    
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("photo", data.photo[0]); // Añadir el archivo correctamente
    
        // ✅ Enviar formData correctamente
        await createHabitat(formData);
    
        // Resetear formulario después de enviar
        reset();
    
        // Mostrar notificación de éxito
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
        });
    
        Toast.fire({
            icon: "success",
            title: "Se ha agregado correctamente",
        });
    
        // Actualizar la lista o realizar acción posterior
        onAdd();
    });
    
    return (
        <div className="form-container">
            <h3 className="text-center">Registra una nueva Hábitat</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="small-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Hábitat
                    </label>
                    <input
                        className="form-control small-input"
                        id="name"
                        type="text"
                        placeholder="Escribe el hábitat"
                        autoComplete="off"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="photo" className="form-label">
                        Selecciona una fotografía
                    </label>
                    <input
                        className="form-control small-input"
                        id="photo"
                        type="file"
                        accept="image/*"
                        {...register("photo", { required: true })}
                    />
                    {errors.photo && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <button type="submit" className="btn btn-dark btn-block mt-3">
                    Guardar
                </button>
            </form>
        </div>

    )
};

export default HabitatForm;