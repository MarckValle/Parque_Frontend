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

export const createHabitat = ( habitat ) => {
    return axios.post('http://localhost:8000/admin_netzahualcoyotl/habitat/', habitat,
        {headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        },
    }
    );
};

export const editHabitat = async (data) => {
    try {
        const response = await axios.put(
            "http://localhost:8000/admin_netzahualcoyotl/habitat/",
            data, 
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error en la API:", error.response ? error.response.data : error);
        throw error.response ? error.response.data : error;
    }
};


export const deleteHabitat = ( id ) => {
    return axios.delete(`http://localhost:8000/admin_netzahualcoyotl/habitat/`, 
    { headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        }, 
        data: { id }
    });
};


