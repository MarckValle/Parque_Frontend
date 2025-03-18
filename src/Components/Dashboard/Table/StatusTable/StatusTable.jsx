import React, { useEffect, useState } from "react";
import { getTableStatus } from "../../../../utils/api/Dashboard/Status/TableStatus/tableStatus.api";
import Paginator from "../../Pagination/Paginator";
import DeleteButton from "./Buttons/DeleteButton/DeleteButton";
import EditButton from "./Buttons/EditButton/EditButton";
import { ClipLoader } from "react-spinners";

function StatusTable({ refreshKey }) {
    const [status_, setStatus] = useState([]);
    const [error, setError] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5;
    const baseUrl = "http://localhost:8000/admin_netzahualcoyotl/table_status/";
    const [loading, setLoading] = useState(true);

    const fetchStatus = async (url) => {
        try {
            const data = await getTableStatus(url, pageSize);
            setStatus(data.results);
            setNextPage(data.next);
            setPrevPage(data.previous);
            setTotalPages(data.total_pages);
            setCurrentPage(data.current_page);
            setLoading(false);
        } catch (err) {
            setError("No se pudieron cargar los datos");
        }
    };
    const handleRefresh = () => {
        fetchStatus(`${baseUrl}`);
    };
    
    useEffect(() => {
        fetchStatus(`${baseUrl}`);
    }, [refreshKey]); // Se refresca cuando cambia refreshKey

    const handlePageChange = (url) => {
        if (url) {
            fetchStatus(url);
        }
    };

    if (error) {
        return <h3 className="text-center mt-4">{error}</h3>;
    }



    
    return (
        <div className="table-container mt-4">
             {loading ? (
                                         
                                         <div className="container">
                                             <ClipLoader color="#007bff" size={100} />
                                             <p>Cargando información...</p>
                                         </div>
                                     
            ) :status_.length === 0 ? (
                <h3 className="text-center">No se puedieron cargar los datos</h3>
            ) : (
                <>
                    <table className="table">
                        <thead className="bg-success">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Estatus</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {status_.map((statu) => (
                                <tr key={statu.id}>
                                    <th scope="row">{statu.id}</th>
                                    <td>{statu.status}</td>
                                    <td>
                                        <EditButton onUpdate={handleRefresh} status={statu} />
                                    </td>
                                    <td>
                                        <DeleteButton onDelete={handleRefresh} status={statu} />
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

export default StatusTable;
