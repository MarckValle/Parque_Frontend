import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { createUsers } from "../../../../utils/api/Dashboard/Users/users.api";
import "/src/assets/styles/Dashboard/Forms/Forms.css"
import TypeSelect from "./TypeSelect/TypeSelect";
import Swal from "sweetalert2";

function UsersForm({ onAdd }){

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    
    const onSubmit = handleSubmit(async (data) => {
        try {
            await createUsers(data);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });
    
            // Muestra el toast de éxito
            Toast.fire({
                icon: "success",
                title: "El usuario se ha agregado correctamente",
            });
    
            reset();
            onAdd();
        } catch (error) {
            if (error.response && error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Correo ya registrado',
                    text: 'El correo electrónico ingresado ya está en uso. Por favor, intente con otro.',
                });
            } else if (error.response && error.response.status === 500){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error inesperado. Por favor, inténtelo nuevamente más tarde.',
                });
            }
        }
    });
    

    return(
        <div className="form-container">
            <h3 className="text-center">Registra un nuevo Usuario</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input className="form-control" id="name" type="text"  autoComplete="off"  {...register("first_name", { required: true })} />
                    {errors.first_name && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="last_name" className="form-label">Apellidos</label>
                    <input className="form-control" id="last_name" type="text" autoComplete="off"  {...register("last_name", { required: true })} />
                    {errors.last_name && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="age" className="form-label">Fecha de nacimiento</label>
                    <input className="form-control" id="age" type="date" autoComplete="off"  {...register("age", { required: true })} />
                    {errors.age && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input className="form-control" id="phone" type="text"  autoComplete="off"  {...register("phone", { required: true })} />
                    {errors.phone && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Correo Electronico</label>
                    <input className="form-control" id="email" type="text" autoComplete="off"  {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <TypeSelect
                        onChange={(value) => setValue("type_user", value)} // Sincroniza el valor con React Hook Form
                    />
                    {errors.type_user && <span className="text-danger">Este campo es obligatorio</span>}
                </div>

                <button type="submit" className="btn btn-dark btn-block mt-3">Guardar</button>
            </form>
        </div>
    );
};

export default UsersForm;