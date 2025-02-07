import React from "react";

function Paginator({ currentPage, totalPages, onNext, onPrevious }) {
    return (
        <nav className="d-flex justify-content-center">
             <ul className="pagination">
                <li className={`page-item ${!onPrevious && "disabled"}`}>
                    <button className="page-link" onClick={onPrevious} disabled={!onPrevious}>
                        Anterior
                    </button>
                </li>
                <li className="page-item">
                    <span className="page-link">
                        Página {currentPage} de {totalPages}
                    </span>
                </li>
                <li className={`page-item ${!onNext && "disabled"}`}>
                    <button className="page-link" onClick={onNext} disabled={!onNext}>
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Paginator;
