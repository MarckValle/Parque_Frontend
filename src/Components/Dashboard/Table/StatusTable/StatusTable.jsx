import React, { useEffect, useState } from "react";
import { getTableStatus } from "../../../../utils/api/Dashboard/Status/TableStatus/tableStatus.api";
import Paginator from "../../Pagination/Paginator";
import { deleteStatus } from "../../../../utils/api/Dashboard/Status/status.api";
import Swal from "sweetalert2";

function StatusTable({ refreshKey }) {
    const [status_, setStatus] = useState([]);
    const [error, setError] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5;
    const baseUrl = "http://localhost:8000/admin_netzahualcoyotl/table_status/";

    const fetchStatus = async (url) => {
        try {
            const data = await getTableStatus(url, pageSize);
            setStatus(data.results);
            setNextPage(data.next);
            setPrevPage(data.previous);
            setTotalPages(data.total_pages);
            setCurrentPage(data.current_page);
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

    const handleDelete = async (id, statusName) => {
        try {
            const accepted = await Swal.fire({
                title: `¿Estás seguro que deseas eliminar "${statusName}"?`,
                showDenyButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: "Cancelar",
            });

            if (accepted.isConfirmed) {
                await deleteStatus(id); // Llamada a la API para eliminar
                Swal.fire({
                    icon: "success",
                    title: "Eliminado",
                    text: "El registro ha sido eliminado correctamente",
                });
                handleRefresh(); // Refrescar los datos de la tabla
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `No se pudo eliminar el registro: ${err.message}`,
            });
        }
    };


    
    return (
        <div className="table-container mt-4">
            {status_.length === 0 ? (
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
                                        <button className="btn btn-warning">Editar</button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(statu.id, statu.status)} // Llama al manejo de eliminación
                                            className="btn btn-outline-danger"
                                        >
                                            Eliminar
                                        </button>
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
