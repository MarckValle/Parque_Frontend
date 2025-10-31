import React, { useEffect, useState } from "react";
import Card from "./Cards/Cards";
import Chart from "./Charts/Chart";
import Table from "./Table/Table";
import SighthingCard from "./Cards/SighthingsCard/SighthingsCard";
import AllVisitsCard from "./Cards/AllVisits/AllVisits";
function Summary(){
    const getAuthToken = () => {
        return localStorage.getItem('access_token');
    };
    
    const token = getAuthToken();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchTopRegisters = async () => {
        try {
        const response = await fetch("https://netzapark-backend.onrender.com/admin_netzahualcoyotl/registers_count/",
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

    fetchTopRegisters();
    }, []);

    return (
        <div className="dashboard-container">
            <div className="summary">
                <Card title="Registros totales"
                    value={data.total_registers}
                    subtitle="..."
                    color="red" 
                    />
                <SighthingCard></SighthingCard>
                <AllVisitsCard></AllVisitsCard>
              
            </div>
            <div className="charts">
                <Chart title="Visitas semanales" type="bar" />  
                <Table title="Top animales" />
            </div>
        </div>
    );
};

export default Summary;