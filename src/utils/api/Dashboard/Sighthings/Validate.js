import axios from 'axios'


const getAuthToken = () => {
    return localStorage.getItem('access_token');
};

const token = getAuthToken();


export const getAllSight = async (pageSize = 10) => {
    try {
        const response = await axios.post(
            'http://localhost:8000/admin_netzahualcoyotl/get_all_sighthings/',
            {  page_size: pageSize },  // Los datos se envían en el body
            {
                headers: { Authorization: `Bearer ${token}` } // Headers van aparte
            }
        );
        return response.data.results;  // Retornamos solo los resultados
    } catch (error) {
        console.error("Error al obtener avistamientos:", error);
        throw error;
    }
};



export const validatedSight = async (sightingId) => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.put(
            `http://localhost:8000/admin_netzahualcoyotl/validate_sighthings/`,
            { id_sighthing: sightingId, validated: true }, // Datos que se envían en la petición
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error validando avistamiento:", error);
        throw error;
    }
};
