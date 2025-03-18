import React, { useEffect, useState } from "react";
import { getTableHabitat } from "../../../../utils/api/Dashboard/Habitat/TableHabitat/tableHabitat.api";
import Paginator from "../../Pagination/Paginator";
import EditButton from "./Buttons/EditButton/EditButton";
import DeleteButton from "./Buttons/DeleteButton/DeleteButton";
import { ClipLoader } from "react-spinners";

function HabitatTable({ refreshKey }){

        const [habitats, setHabitat] = useState([]);
        const [error, setError] = useState(null);
        const [nextPage, setNextPage] = useState(null);
        const [prevPage, setPrevPage] = useState(null);
        const [currentPage, setCurrentPage] = useState(1); 
        const [totalPages, setTotalPages] = useState(1); 
        const [loading, setLoading] = useState(true);

        const pageSize = 5; 
        const baseUrl = "http://localhost:8000/admin_netzahualcoyotl/table_habitats/";
    
        const fetchHabitats = async (url) => {
            try {
                const data = await getTableHabitat(url, pageSize);
                setLoading(false);
                setHabitat(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
                setTotalPages(data.total_pages);
                setCurrentPage(data.current_page);
            } catch (err) {
                setError("No se pudieron cargar los estatus");
            }
        };
    
        const handleRefresh = () => {
                fetchHabitats(`${baseUrl}`);
            };
            
            useEffect(() => {
                fetchHabitats(`${baseUrl}`);
            }, [refreshKey]); // Se refresca cuando cambia refreshKey
        
        const handlePageChange = (url) => {
                if (url) {
                    fetchHabitats(url);
                }
            };

        
    
        if (error) {
            return <div>{error}</div>;
        }

        

    return(
        <div className="table-container mt-4">
            {loading ? (
                             
                                        <div className="container">
                                            <ClipLoader color="#007bff" size={100} />
                                            <p>Cargando información...</p>
                                        </div>
                                    
            ) : habitats.length === 0  ? (
                <h3 className="text-center">No se puedieron cargar los datos</h3>
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
                                    <EditButton onUpdate={handleRefresh} habitat={habitat}  />
                                </td>
                                <td>
                                    <DeleteButton  onDelete={handleRefresh} habitat={habitat} />
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
