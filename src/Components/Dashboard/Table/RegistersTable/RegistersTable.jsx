import React from "react";
import { useEffect, useState } from "react";
import { getTable } from "../../../../utils/api/Dashboard/Registers/registersTable.api";
import Paginator from "../../Pagination/Paginator";

function RegistersTable(){

        const [registers, setRegisters] = useState([]);
        const [error, setError] = useState(null);
        const [nextPage, setNextPage] = useState(null);
        const [prevPage, setPrevPage] = useState(null);
        const [currentPage, setCurrentPage] = useState(1); // Página actual
        const [totalPages, setTotalPages] = useState(1); // Total de páginas
        const pageSize = 5; // Tamaño de la página
        const baseUrl = "http://localhost:8000/admin_netzahualcoyotl/get_registers/";
    
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
    
        useEffect(() => {
            // Cargar la primera página
            fetchRegisters(`${baseUrl}`);
        }, []);
    
        const handlePageChange = (url) => {
            if (url) {
                fetchRegisters(url); // Navegar a la página siguiente o anterior
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
                        <th scope="col">Nombre cientifico</th>
                        <th scope="col">Funcion</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Distribucion</th>
                        <th scope="col">Sonido</th>
                        <th scope="col">Fotografia</th>
                        <th scope="col">Video</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Estatus</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registers.map((register) => (
                            <tr key={register.id}>
                                <th scope="row">{register.id}</th>
                                <td>{register.name}</td>
                                <td>{register.scientific_name}</td>
                                <td>{register.function}</td>
                                <td>{register.description}</td>
                                <td>{register.distribution}</td>
                                <td>{register.sound}</td>
                                <td>
                                <img
                                        src={
                                            register.photo ||
                                            "https://th.bing.com/th/id/OIP.juOdINlwfaxHhiWe-DksPwHaHa?rs=1&pid=ImgDetMain"
                                        }
                                        alt="imagen"
                                        className="img-thumbnail img-fluid"
                                        style={{ maxWidth: "200px", objectFit: "contain" }}
                                    />
                                </td>
                                <td>{register.video}</td>
                                <td>{register.type_id}</td>
                                <td>{register.status_id}</td>
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

export default RegistersTable;
