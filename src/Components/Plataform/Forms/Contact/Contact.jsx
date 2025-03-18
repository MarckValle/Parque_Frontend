import React from "react";
import { createComment } from "../../../../utils/api/General/Comments/Comments";
import { useForm } from 'react-hook-form';

import '/src/assets/styles/Platform/index.css';
import Swal from 'sweetalert2';
function ContactForm() {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
  
  
  const onSubmit = handleSubmit(async (data) => {
          await createComment(data);
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
          
        
      });
    

  return (
      <form onSubmit={onSubmit}>
        <div className="app-share-container d-flex justify-content-center">
          {/* Sección Izquierda - Inputs */}
            <div className="share-left">
              <h2>Contactanos</h2>
              <p>Envía tus comentarios</p>
              <div className="share-group">
                  <label className="share-label">Nombre Completo</label>
                  <input type="text" placeholder="Nombre Completo" className="share-control" {...register("full_name", { required: true })}/>
              </div>
              <div className="share-group">
                  <label className="share-label">Correo electronico</label>
                  <input type="email" className="share-control"  placeholder="email@ejemplo.com" {...register("email", { required: true })} />
              </div>
              <div className="share-group">
                  <label className="share-label">Tipo de Mensaje</label> 
                  <select {...register("type_comment", { required: true })}>
                  <option value="Comentarios">Comentarios</option>
                  <option value="Colaboracion">Colaboracion</option>
                  <option value="Aportacion">Aportacion</option>
                  </select>
              </div>
              <div className="share-group">
                  <label className="share-label">Mensaje</label>
                  <textarea type="text" className="share-control" rows="4" cols="46" placeholder="Escribe tus comentarios aqui" {...register("description", { required: true })}>
                      
                  </textarea>
              </div>
              <button className="btn btn-success text-dark mt-3 col-12">Enviar</button>
            </div>         
        </div>
      </form>
  );
}

export default ContactForm;
