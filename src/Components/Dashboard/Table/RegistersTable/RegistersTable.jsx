import React, { useEffect, useState } from "react";
import { getTable } from "../../../../utils/api/Dashboard/Registers/registersTable.api";
import Paginator from "../../Pagination/Paginator";
import Icons from "./Icons/Icons";
import imgae from '/src/assets/svgs/Registers/image.svg'
import video from '/src/assets/svgs/Registers/video.svg'
import sound from '/src/assets/svgs/Registers/sound.svg'
import EditButton from "./Buttons/EditButton/EditButton";
import DeleteButton from "./Buttons/DeleteButton/DeleteButton";
import { ClipLoader } from "react-spinners";

function RegistersTable({ refreshKey }){

        const [registers, setRegisters] = useState([]);
        const [error, setError] = useState(null);
        const [nextPage, setNextPage] = useState(null);
        const [prevPage, setPrevPage] = useState(null);
        const [currentPage, setCurrentPage] = useState(1); // Página actual
        const [totalPages, setTotalPages] = useState(1); // Total de páginas
        const pageSize = 5; // Tamaño de la página
        const baseUrl = "https://netzapark-backend.onrender.com/admin_netzahualcoyotl/get_registers/";
        const [loading, setLoading] = useState(true);
        const fetchRegisters = async (url) => {
            try {
                const data = await getTable(url, pageSize);
                setRegisters(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
                setTotalPages(data.total_pages);
                setCurrentPage(data.current_page);
                setLoading(false);
            } catch (err) {
                setError(
                    <div className="container text-center">
                        <h3 className="mt-3">No se pudieron cargar los registros.</h3>
                    </div>    
                );
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

        return (
            <div className="table-container mt-4">
                  {loading ? (
                    <div className="container text-center">
                        <ClipLoader color="#007bff" size={100} />
                        <p>Cargando información...</p>
                    </div>
                ) : registers.length === 0 ? (
                    <p>No hay elementos en la tabla</p>
                ) : (
                <>
                    <table className="table">
                        <thead className="bg-success">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Nombre científico</th>
                            <th scope="col">Función</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Distribución</th>
                            <th scope="col">Sonido</th>
                            <th scope="col">Fotografía</th>
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
                                    <td>
                                        <Icons data={register.sound} img={sound} type="sound" register={register}  />
                                    </td>
                                    <td>
                                        <Icons data={register.photo} img={imgae} type="photo" register={register} />
                                    </td>
                                    <td>
                                        <Icons data={register.video} img={video} type="video" register={register} />
                                    </td>
                                    <td>{register.type_id?.type_register}</td>
                                    <td>{register.status_id?.status}</td>
                                    
                                    <td>
                                        <EditButton onUpdate={handleRefresh} register={register} />
                                    </td>
                                    <td>
                                        <DeleteButton onDelete={handleRefresh} register={register} />
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
