import axios from 'axios'


const getAuthToken = () => {
    return localStorage.getItem('access_token');
};

const token = getAuthToken();

export const getAllStatus = async (page = 1, pageSize = 10) => {
    const token = localStorage.getItem('access_token');
    try {
        const response = await axios.post('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/table_status/',{
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
            },
            params: {
                page: page,
                page_size: pageSize,
            },
        });
        return response;
    } catch (error) {
        throw error; // Volver a lanzar el error para manejarlo en el componente
    }
};



export const getIdStatus = ( id ) => {
   return axios.get(`https://netzapark-backend.onrender.com/tasks_app/get_id_tasks/${id}`, { data: {id} });
};

export const createStatus = ( stat ) => {
    return axios.post('https://netzapark-backend.onrender.com/admin_netzahualcoyotl/status/', stat,
        {headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        },
    }
    );
};

export const deleteStatus = ( id ) => {
    return axios.delete(`https://netzapark-backend.onrender.com/admin_netzahualcoyotl/status/` ,
    { headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        }, 
        data: { id }
    });
};

export const editStatus = ( data ) =>{
    return axios.put(`https://netzapark-backend.onrender.com/admin_netzahualcoyotl/status/`, data ,
        {headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        },
    }
    )
} 