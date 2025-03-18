import React, { useState } from "react";
import { useForm } from 'react-hook-form';

import { createSighthing } from "../../../../utils/api/General/AddSighthings";
import RegisterSelect from "../../Selects/RegisterSelect";
import SelectType from "../../../Dashboard/Forms/RegistersForm/Selects/SelectType";

import Swal from 'sweetalert2';
import '/src/assets/styles/Platform/index.css';


function ImageUploadForm() {

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
        const formData = new FormData();
        formData.append("full_name", data.full_name);
        formData.append("date", data.date);
        formData.append("description", data.description);
        formData.append("type_register", data.type_register);
        formData.append("name_register", data.name_register);
        
        // Asegurar que se envíe correctamente el archivo
        if (data.photo.length > 0) {
          formData.append("photo", data.photo[0]); 
        }
      
        try {
          await createSighthing(formData);
          reset();
      
          Swal.fire({
            icon: "success",
            title: "Se ha agregado correctamente",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000
          });
        } catch (error) {
          console.error("Error en la API:", error);
          Swal.fire({
            icon: "error",
            title: "Error al enviar el formulario",
            text: error.response?.data?.message || "Revisa la consola para más detalles"
          });
        }
      });
  


  return (
    <form onSubmit={onSubmit}>
      <div className="app-share-container">
        {/* Sección Izquierda - Inputs */}
          <div className="app-share-left">
            <h2>Comparte tus fotografías</h2>
            <p>Envía tus avistamientos dentro del parque</p>

              <div className="share-group">
                  <label className="share-label">Nombre Completo</label>
                  <input type="text" placeholder="Nombre Completo" className="share-control"  autoComplete="off"  {...register("full_name", { required: true })} />
              </div>
              <div className="share-group">
                  <label className="share-label">Fecha</label>
                  <input type="date" className="share-control"  {...register("date", { required: true })} />
              </div>
              <div className="share-group">
                <SelectType onChange={(value) => setValue("type_register", value)} />
                {errors.type_id && <span className="text-danger">Este campo es obligatorio</span>}
              </div>
              <div className="share-group">
                <RegisterSelect onChange={(value) => setValue("name_register", value)} />
                {errors.type_id && <span className="text-danger">Este campo es obligatorio</span>}
              </div>
          </div>

          {/* Sección Derecha - Imagen */}
          <div className="share-right">
            <div className="app-image-preview">
              {imagePreview ? (
                <img src={imagePreview} alt="Vista previa" />
              ) : (
                <div className="placeholder">
                  <p>Imagen</p>
                </div>
              )}
            </div>
            <div className="form-group">
                <label htmlFor="">Selecciona la fotografía de tu avistamiento</label>
                <input type="file"  onChange={handleImageChange}  {...register("photo", { required: true })}/>
            </div>
            <div className="form-group">
                <label htmlFor="description" className="form-label">Descripción</label>
                <input type="text" placeholder="Descripción" id="description" className="form-control" {...register("description", { required: true })}/>    
            </div>        
            <button className="btn btn-success text-dark mt-5">Enviar</button>
          </div>
        
      </div>
    </form>
  );
}

export default ImageUploadForm;
