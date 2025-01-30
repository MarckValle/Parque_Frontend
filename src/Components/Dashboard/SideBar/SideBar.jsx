import React, {useState} from "react";
import SideBarFooter from "./SideBarFooter/";
import '/src/assets/styles/sidebar.css'

import "/src/assets/styles/sidebar.css"

function SideBar(){

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <button
                className="btn btn-toggle"
                type="button"
                onClick={toggleSidebar}
                aria-expanded={!isCollapsed}
                aria-controls="sidebar"
            >
                <i className={`bi ${isCollapsed ? "bi-list" : "bi-x"}`}></i> {/* Ícono cambia */}
            </button>
            <aside>
                <ul className="sidebar-nav p-0">
                <li className="sidebar-header">
                    {isCollapsed ? "PN" : "Parque Netzahualcoyotl"}
                    {!isCollapsed && <hr />}
                </li>
                <li className={`sidebar-item ${!isCollapsed ? "expanded" : ""}`}>
                    <a className="sidebar-link active" href="#">
                    <i className="bi bi-speedometer2"></i>
                    {!isCollapsed && <span className="ms-2">Dashboard</span>}
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                    <i className="bi bi-check2-circle"></i>
                    {!isCollapsed && <span className="ms-2">Validar Avistamientos</span>}
                    </a>
                </li>
                <li className="sidebar-item">
                    <a
                    className="sidebar-link collapsed has-dropdown"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#Registros"
                    aria-expanded="true"
                    aria-controls="Registros"
                    >
                    <i className="bi bi-plus-circle-dotted"></i>
                    {!isCollapsed && <span className="ms-2">Registros</span>}
                    </a>
                    <ul
                    id="Registros"
                    className={`sidebar-dropdown list-unstyled ${isCollapsed ? "collapse" : ""}`}
                    >
                    <li className="sidebar-item">
                        <a href="" className="sidebar-link">
                        <i class="bi bi-bug-fill"></i>
                        {!isCollapsed && <span className="ms-2">Animales</span>}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="" className="sidebar-link">
                        <i class="bi bi-tree-fill"></i>
                        {!isCollapsed && <span className="ms-2">Habitats</span>}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="" className="sidebar-link">
                        <i class="bi bi-shield-fill"></i>
                        {!isCollapsed && <span className="ms-2">Status</span>}
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link disabled" href="#">
                    <i className="bi bi-person-plus"></i>
                    {!isCollapsed && <span className="ms-2">Agregar Usuarios</span>}
                    </a>
                </li>
                </ul>
                <SideBarFooter isCollapsed={isCollapsed} />
            </aside>
            </div>
        );  
};

export default SideBar;