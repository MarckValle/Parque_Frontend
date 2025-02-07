import React from "react";
import { useEffect, useState } from "react";
import { getTableHabitat } from "../../../../utils/api/Dashboard/Habitat/TableHabitat/tableHabitat.api";
import Paginator from "../../Pagination/Paginator";

function HabitatTable(){

        const [habitats, setHabitat] = useState([]);
        const [error, setError] = useState(null);
        const [nextPage, setNextPage] = useState(null);
        const [prevPage, setPrevPage] = useState(null);
        const [currentPage, setCurrentPage] = useState(1); // Página actual
        const [totalPages, setTotalPages] = useState(1); // Total de páginas
        const pageSize = 5; // Tamaño de la página
        const baseUrl = "http://localhost:8000/admin_netzahualcoyotl/table_habitats/";
    
        const fetchHabitats = async (url) => {
            try {
                const data = await getTableHabitat(url, pageSize);
                setHabitat(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
                setTotalPages(data.total_pages);
                setCurrentPage(data.current_page);
            } catch (err) {
                setError("No se pudieron cargar los estatus");
            }
        };
    
        useEffect(() => {
            // Cargar la primera página
            fetchHabitats(`${baseUrl}`);
        }, []);
    
        const handlePageChange = (url) => {
            if (url) {
                fetchHabitats(url); // Navegar a la página siguiente o anterior
            }
        };
    
        if (error) {
            return <div>{error}</div>;
        }

    return(
        <div className="table-container mt-4">
            {habitats.length === 0  ? (
                <p>No hay elementos en la tabla</p>
            ) : (
            <>
                <table className="table">
                    <thead className="bg-success">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Habitat</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {habitats.map((habitat) => (
                            <tr key={habitat.id}>
                                <th scope="row">{habitat.id}</th>
                                <td>{habitat.name}</td>
                                <td>
                                    <img
                                        src={
                                            habitat.photo ||
                                            "https://upload.wikimedia.org/wikipedia/commons/3/34/Rub_al_Khali_002.JPG"
                                        }
                                        alt="imagen"
                                        className="img-thumbnail img-fluid"
                                        style={{ maxWidth: "200px", objectFit: "contain" }}
                                    />
                                </td>
                                <td>
                                    <button className="btn btn-warning">Editar</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                onNext={() => handlePageChange(nextPage)}
                onPrevious={() => handlePageChange(prevPage)}
                />
            </>
            )}
        </div>
    );
}

export default HabitatTable;
