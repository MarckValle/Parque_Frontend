import React from "react";
import { createHabitat } from "../../../../utils/api/Dashboard/Habitat/habitat.api";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import "/src/assets/styles/Dashboard/Forms/Forms.css"

function HabitatForm(){
    
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        await createHabitat(data);
        reset();
        navigate('/habitats/');
    });

    return(
        <div className="form-container">
            <h3 className="text-center">Registra una nueva Habitat</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Habitat</label>
                    <input className="form-control" id="name" type="text" placeholder="Escribe el Habitat" autoComplete="off"  {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="photo" className="form-label">Selecciona una fotografia</label>
                    <input className="form-control" id="photo" type="text" placeholder="Fotografia" autoComplete="off"  {...register("photo", { required: true })} />
                    {errors.photo && <span className="text-danger">This field is required</span>}
                </div>
                <button type="submit" className="btn btn-dark btn-block mt-3">Guardar</button>
            </form>
        </div>
    )
};

export default HabitatForm;