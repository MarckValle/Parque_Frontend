import React from "react";
import { useForm } from 'react-hook-form';
import "/src/assets/styles/Dashboard/Forms/Forms.css"
import { createRegister } from "../../../../utils/api/Dashboard/Registers/registersTable.api";
import StatusSelect from "./Selects/SelectStatus";
import SelectType from "./Selects/SelectType";

function RegistersForm(){
    
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        await createRegister(data);
        reset();
    });

    return(
        <div className="form-container">
            <h3 className="text-center">Nuevo registro de Animal</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input className="form-control" id="name" type="text"  autoComplete="off"  {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="scientific_name" className="form-label">Nombre cientifico</label>
                    <input className="form-control" id="scientific_name" type="text" autoComplete="off"  {...register("scientific_name", { required: true })} />
                    {errors.scientific_name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="function" className="form-label">Funcion</label>
                    <input className="form-control" id="function" type="text"  autoComplete="off"  {...register("function", { required: true })} />
                    {errors.function && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Descripcion</label>
                    <input className="form-control" id="description" type="text" autoComplete="off"  {...register("description", { required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="distribution" className="form-label">Distribucion</label>
                    <input className="form-control" id="distribution" type="text"  autoComplete="off"  {...register("distribution", { required: true })} />
                    {errors.distribution && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="sound" className="form-label">Selecciona su audio</label>
                    <input className="form-control" id="sound" type="text"  autoComplete="off"  {...register("sound", { required: true })} />
                    {errors.sound && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="photo" className="form-label">Selecciona una fotografia</label>
                    <input className="form-control" id="photo" type="text"  autoComplete="off"  {...register("photo", { required: true })} />
                    {errors.photo && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="video" className="form-label">Selecciona un video</label>
                    <input className="form-control" id="photo" type="text" autoComplete="off"  {...register("video", { required: true })} />
                    {errors.video && <span className="text-danger">This field is required</span>}
                </div>
                {/* Select Type */}
                <div className="form-group">
                <SelectType
                    onChange={(value) => setValue("type_id", value)} // Sincronizar con React Hook Form
                />
                {errors.type_id && <span className="text-danger">This field is required</span>}
                </div>

                {/* Select Status */}
                <div className="form-group">
                <StatusSelect
                    onChange={(value) => setValue("status_id", value)} // Sincronizar con React Hook Form
                />
                {errors.status_id && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-dark btn-block mt-3">Guardar</button>
            </form>
        </div>
    )
};

export default RegistersForm;