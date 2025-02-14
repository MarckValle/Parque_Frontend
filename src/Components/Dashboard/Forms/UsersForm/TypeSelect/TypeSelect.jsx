import React, {useState, useEffect} from "react";
import axios from 'axios';

function TypeSelect( { onChange } ){

    const [typesU, setTypesU] = useState([]); // Guardar opciones del API\

    useEffect(() => {
        // Petición a la API
        const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();

        const fetchtypes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/admin_netzahualcoyotl/user_type/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                    },
                });
                setTypesU(response.data); // Asumimos que la API devuelve un array en `results`
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchtypes();
    }, []);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue); // Pasar el ID seleccionado al formulario principal
      };

    return(
        <>
            <label htmlFor="types-select" className="form-label">Tipo de Usuario</label>
            <select id="types-select" className="form-select" onChange={handleChange}>
                <option value="" disabled>-- Selecciona el tipo de usuario --</option>
                {typesU.map((types) => (
                <option key={types.id} value={types.id}>{types.type_user}</option>
                ))}
            </select>
        </>
    )
}; 

export default TypeSelect;