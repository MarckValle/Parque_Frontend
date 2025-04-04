import React, { useEffect, useState } from "react";
import Top from "./Top/Top";
import SoundSection from "./Sound/Sound";
import GeneralInfo from "./GeneralInformation/GeneralInfo";
import DescriptionSection from "./Descripcion/DescriptionSection";
import FunctionSection from "./Function/FunctionSection";
import ConservationSection from "./Conservation/ConservationSection";
import { useParams } from "react-router-dom";
import Model3D from "./Model3D/Model3D";
import { ClipLoader } from "react-spinners";


function InfoView() {
    const { registerId } = useParams();
    const [registerData, setRegisterData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!registerId) return;

        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/general_netzahualcoyotl/register_card/${registerId}/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
        
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
        
                const data = await response.json();
                setRegisterData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [registerId]);

    if (loading) {
        return (
            <div className="container text-center">
                <ClipLoader color="#007bff" size={100} />
                <p>Cargando información...</p>
            </div>
        );
    }
    if (error) return <p>Error: {error}</p>;
    if (!registerData) return <p>No se encontraron datos.</p>;

    return (
        <div className="container">
            {/* Encabezado con imagen y nombres */}
            <Top 
                photo={registerData.photo} 
                name={registerData.name} 
                scientific_name={registerData.scientific_name} 
            />

            {/* Sección de sonido */}
            <SoundSection soundUrl={registerData.sound} />

            <hr />

            {/* Modelo 3D */}
            {/* <Model3D modelPath="" /> */}


            {/* Información general */}
            <GeneralInfo 
                scientificName={registerData.scientific_name} 
                habitat={registerData.habitats ?? []} 
                distribution={registerData.distribution} 
                feed={registerData.alimentations ?? []}
            />

            <hr />

            {/* Descripción */}
            <DescriptionSection 
                description={registerData.description} 
                image={registerData.photo} 
            />

            <hr />

            {/* Función ecológica */}
            <FunctionSection functionText={registerData.function} functionImage={registerData.alimentations?.map(feed => feed.photo) ?? []} />

            <hr />

            {/* Conservación */}
            <ConservationSection 
                status={registerData.status_id?.status ?? "No disponible"} 
                name_threats={registerData.threats?.map(threat => threat.name) ?? []} 
            />

            
        </div>
    );
}

export default InfoView;
