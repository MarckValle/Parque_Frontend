import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import "/src/assets/styles/Dashboard/Forms/Forms.css"
import { createRegister } from "../../../../utils/api/Dashboard/Registers/registersTable.api";
import StatusSelect from "./Selects/SelectStatus";
import SelectType from "./Selects/SelectType";
import SelectFeed from "./Selects/SelectFeed";
import SelectThreat from "./Selects/SelectThreat";
import SelectHabitat from "./Selects/SelectHabitat";

function RegistersForm( {OnAdd} ){
    
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    useEffect(() => {
        register("type_id", { required: true });
        register("status_id", { required: true });
        register("alimentation_ids", { required: true });
        register("threat_ids", { required: true });
        register("habitat_ids", { required: true });
    }, [register]);
    
    
    const onSubmit = handleSubmit(async (data) => {
        console.log("Data enviada:", data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("scientific_name", data.scientific_name); 
        formData.append("function", data.function); 
        formData.append("description", data.description); 
        formData.append("distribution", data.distribution); 
        formData.append("sound", data.sound[0]); 
        formData.append("photo", data.photo[0]); 
        formData.append("video", data.video[0]); 
        formData.append("type_id", data.type_id); 
        formData.append("status_id", data.status_id); 
        formData.append("alimentation_ids", data.alimentation_ids); 
        formData.append("threat_ids", data.threat_ids); 
        formData.append("habitat_ids", data.habitat_ids);
        await createRegister(formData);
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
                OnAdd();
    });

    return(
        <div className="form-container">
            <h3 className="text-center">Nuevo registro de Animal</h3>
            <form onSubmit={onSubmit} className="small-form">
                <div className="row">
                    {/* Primera Columna */}
                    <div className="col-md-6">
                        <div className="form-group-horizontal">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input className="form-control small-input" id="name" type="text" autoComplete="off" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="scientific_name" className="form-label">Nombre científico</label>
                            <input className="form-control small-input" id="scientific_name" type="text" autoComplete="off" {...register("scientific_name", { required: true })} />
                            {errors.scientific_name && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="function" className="form-label">Función</label>
                            <input className="form-control small-input" id="function" type="text" autoComplete="off" {...register("function", { required: true })} />
                            {errors.function && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="description" className="form-label">Descripción</label>
                            <input className="form-control small-input" id="description" type="text" autoComplete="off" {...register("description", { required: true })} />
                            {errors.description && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="distribution" className="form-label">Distribución</label>
                            <input className="form-control small-input" id="distribution" type="text" autoComplete="off" {...register("distribution", { required: true })} />
                            {errors.distribution && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                    </div>

                    {/* Segunda Columna */}
                    <div className="col-md-6">
                        <div className="form-group-horizontal">
                            <label htmlFor="sound" className="form-label">Selecciona su audio</label>
                            <input className="form-control small-input" id="sound" type="file" autoComplete="off" {...register("sound", { required: true })} />
                            {errors.sound && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="photo" className="form-label">Selecciona una foto</label>
                            <input className="form-control small-input" id="photo" type="file" autoComplete="off" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        <div className="form-group-horizontal">
                            <label htmlFor="video" className="form-label">Selecciona un video</label>
                            <input className="form-control small-input" id="video" type="file" autoComplete="off" {...register("video", { required: true })} />
                            {errors.video && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>

                        {/* Select Type */}
                        <div className="form-group-horizontal">
                            <SelectType onChange={(value) => setValue("type_id", value)} />
                            {errors.type_id && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>

                        {/* Select Status */}
                        <div className="form-group-horizontal">
                            <StatusSelect onChange={(value) => setValue("status_id", value)} />
                            {errors.status_id && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        {/* Select feed */}
                        <div className="form-group-horizontal">
                            <SelectFeed onChange={(value) => setValue("alimentation_ids", value)} />
                            {errors.alimentation_ids && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        {/* Select threat */}
                        <div className="form-group-horizontal">
                            <SelectThreat onChange={(value) => setValue("threat_ids", value)} />
                            {errors.threat_ids && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                        <div className="form-group-horizontal">
                            <SelectHabitat onChange={(value) => setValue("habitat_ids", value)} />
                            {errors.habitat_ids && <span className="text-danger">Este campo es obligatorio</span>}
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-block mt-3">Guardar</button>
            </form>
        </div>


    )
};

export default RegistersForm;