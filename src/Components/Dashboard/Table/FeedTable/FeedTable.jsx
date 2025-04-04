import React, { useEffect, useState } from "react";
import Paginator from "../../Pagination/Paginator";
import DeleteButton from '../FeedTable/Buttons/DeleteButton/DeleteButton'
import EditButton from "./Buttons/EditButton/EditButton";
import { ClipLoader } from "react-spinners";
import { getTableFeed } from "../../../../utils/api/Dashboard/Feed/feed.api";

function FeedTable({ refreshKey }) {
    const [feeds, setFeeds] = useState([]);
    const [error, setError] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5;
    const baseUrl = "https://netzapark-backend.onrender.com/admin_netzahualcoyotl/table_feed/";
    const [loading, setLoading] = useState(true);

    const fetchStatus = async (url) => {
        try {
            const data = await getTableFeed(url, pageSize);
            setFeeds(data.results);
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
                                         
                                         <div className="container text-center">
                                             <ClipLoader color="#007bff" size={100} />
                                             <p>Cargando información...</p>
                                         </div>
                                     
            ) :feeds.length === 0 ? (
                <h3 className="text-center">No se puedieron cargar los datos</h3>
            ) : (
                <>
                    <table className="table">
                        <thead className="bg-success">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Comida</th>
                                <th scope="col">Fotografia</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeds.map((feed) => (
                                <tr key={feed.id}>
                                    <th scope="row">{feed.id}</th>
                                    <td>{feed.name}</td>
                                    <td>
                                        <img src={feed.photo}  alt="imagen"
                                        className="img-thumbnail img-fluid"
                                        style={{ maxWidth: "100px", objectFit: "contain" }}/>
                                        

                                    </td>
                                    <td>
                                        <EditButton onUpdate={handleRefresh} feed={feed} />
                                    </td>
                                    <td>
                                        <DeleteButton onDelete={handleRefresh} feed={feed} />
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

export default FeedTable;
