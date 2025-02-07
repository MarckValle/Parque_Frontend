import axios from 'axios'


const getAuthToken = () => {
    return localStorage.getItem('access_token');
};

const token = getAuthToken();

export const getAllHabitats = async () => {
    const token = localStorage.getItem('access_token');
    try {
        const response = await axios.get('http://localhost:8000/admin_netzahualcoyotl/habitat/', {
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
            },
        });
        return response;
    } catch (error) {
        throw error; // Volver a lanzar el error para manejarlo en el componente
    }
};
export const getIdTasks = ( id ) => {
   return axios.get(`http://localhost:8000/tasks_app/get_id_tasks/${id}`, { data: {id} });
};

export const createHabitat = ( habitat ) => {
    return axios.post('http://localhost:8000/admin_netzahualcoyotl/habitat/', habitat,
        {headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        },
    }
    );
};

export const deleteTask = ( id ) => {
    return axios.delete(`http://localhost:8000/tasks_app/delete_task/`, { data: {id},  Authorization: `Bearer ${token}` },  );
};

export const editTask = ( id, data ) =>{
    return axios.put(`http://localhost:8000/tasks_app/edit_task/${id}`, data ,
        {headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        },
    }
    )
} 