import React, { useEffect, useState } from "react";

function AllVisitsCard(){

    const getAuthToken = () => {
            return localStorage.getItem('access_token');
        };
        
        const token = getAuthToken();
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
        const SighthingsFetch = async () => {
            try {
            const response = await fetch("https://netzapark-backend.onrender.com/admin_netzahualcoyotl/all_visits/",
                { headers: {
                Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
                }, 
            });
            if (!response.ok) {
                throw new Error("Error al obtener los datos de popularidad");
            }
    
            const result = await response.json();
            setData(result);
            } catch (err) {
            setError(err.message);
            } finally {
            setLoading(false);
            }
        };
    
        SighthingsFetch();
        }, []);


    return (
        <div className={`card red`}>
          <h4>Visitas totales del sitio</h4>
          <p className="value">{data.total_visits}</p>
          
        </div>
      );
}

export default AllVisitsCard;