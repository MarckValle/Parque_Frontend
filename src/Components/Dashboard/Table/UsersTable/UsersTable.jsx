import React, { useEffect, useState } from "react";
import { getTable } from "../../../../utils/api/Dashboard/Registers/registersTable.api";
import Paginator from "../../Pagination/Paginator";
import DeleteButton from "./Buttons/DeleteButton/DeleteButton";

function UsersTable({ refreshKey }){

        const [registers, setRegisters] = useState([]);
        const [error, setError] = useState(null);
        const [nextPage, setNextPage] = useState(null);
        const [prevPage, setPrevPage] = useState(null);
        const [currentPage, setCurrentPage] = useState(1); // Página actual
        const [totalPages, setTotalPages] = useState(1); // Total de páginas
        const pageSize = 5; // Tamaño de la página
        const baseUrl = "http://localhost:8000/admin_netzahualcoyotl/table_users/";
    
        const fetchRegisters = async (url) => {
            try {
                const data = await getTable(url, pageSize);
                setRegisters(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
                setTotalPages(data.total_pages);
                setCurrentPage(data.current_page);
            } catch (err) {
                setError("No se pudieron cargar los estatus");
            }
        };
    
        const handleRefresh = () => {
                        fetchRegisters(`${baseUrl}`);
                    };
                    
                    useEffect(() => {
                        fetchRegisters(`${baseUrl}`);
                    }, [refreshKey]); // Se refresca cuando cambia refreshKey
                
                    const handlePageChange = (url) => {
                        if (url) {
                            fetchRegisters(url);
                        }
                    };

        
    
        if (error) {
            return <div>{error}</div>;
        }

    return(
        <div className="table-container mt-4">
            {registers.length === 0  ? (
                <p>No hay elementos en la tabla</p>
            ) : (
            <>
                <table className="table">
                    <thead className="bg-success">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Tipo Usuario</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registers.map((register) => (
                            <tr key={register.id}>
                                <th scope="row">{register.id}</th>
                                <td>{register.first_name}</td>
                                <td>{register.last_name}</td>
                                <td>{register.age}</td>
                                <td>{register.email}</td>
                                <td>{register.phone}</td>
                                <td>{register.type_id?.type_user}</td>
                                <td>
                                    <button className="btn btn-warning">Editar</button>
                                </td>
                                <td>
                                    <DeleteButton onDelete={handleRefresh} users={register} />
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

export default UsersTable;
