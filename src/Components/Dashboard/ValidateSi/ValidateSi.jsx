import React, { useEffect, useState } from "react";
import Cards from "./Card/Cards";
import Swal from "sweetalert2";
import "/src/assets/styles/Dashboard/Validate/validate.css";
import { getAllSight, validatedSight } from "../../../utils/api/Dashboard/Sighthings/Validate";
import { ClipLoader } from "react-spinners";

function ValidateSig() {
    const [sightings, setSightings] = useState([]); // Estado inicial vacío
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSightings();
    }, []);

    const fetchSightings = async () => {
        setLoading(true);
        try {
            const data = await getAllSight(); 
            setSightings(data || []); // Si `results` es undefined, usa un array vacío
        } catch (error) {
            console.error("Error al obtener los avistamientos:", error);
            setSightings([]); // En caso de error, dejamos el estado vacío
        }
        setLoading(false);
    };

    const handleApprove = async (id) => {
        try {
            await validatedSight(id);
            Swal.fire({
                icon: "success",
                title: "Aprobado",
                text: "El avistamiento ha sido validado con éxito",
                timer: 2000,
            });

            // Refrescar la lista después de validar
            fetchSightings();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo validar el avistamiento",
            });
        }
    };

    return (
        <div className="validate-container">

            {loading ? (
                 
                            <div className="container text-center">
                                <ClipLoader color="#007bff" size={100} />
                                <p>Cargando información...</p>
                            </div>
                        
            ) : sightings.length === 0 ? (
                <p className="text-center">No hay avistamientos por validar.</p>
            ) : (
                sightings.map((sight) => (
                    <Cards
                        key={sight.id}
                        id={sight.id}
                        tipo={sight.type_register}
                        nombre={sight.full_name}
                        fecha={sight.date}
                        descripcion={sight.description}
                        img={sight.photo}
                        onApprove={() => handleApprove(sight.id)}
                    />
                ))
            )}
        </div>
    );
}

export default ValidateSig;
