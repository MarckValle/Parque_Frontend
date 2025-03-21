import React, {useState} from "react";
// import SideBarFooter from "./SideBarFooter/";
import '/src/assets/styles/sidebar.css'
import { useLocation } from 'react-router-dom';


function SideBar(){
    
    let location = useLocation();

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
                    <a className={`sidebar-link ${location.pathname === "/dashboard/" ? "active" : ""}`} href="/dashboard/">
                    <i className="bi bi-speedometer2"></i>
                    {!isCollapsed && <span className="ms-2">Dashboard</span>}
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className={`sidebar-link ${location.pathname === "/validar_avistamientos/" ? "active" : ""}`} href="/validar_avistamientos/">
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
                        <a href="/animales/" className={`sidebar-link ${location.pathname === "/animales/" ? "active" : ""}`}>
                        <i class="bi bi-bug-fill"></i>
                        {!isCollapsed && <span className="ms-2">Animales</span>}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/habitats/" className={`sidebar-link ${location.pathname === "/habitats/" ? "active" : ""}`}>
                        <i class="bi bi-tree-fill"></i>
                        {!isCollapsed && <span className="ms-2">Habitats</span>}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/estatus/" className={`sidebar-link ${location.pathname === "/estatus/" ? "active" : ""}`}>
                        <i class="bi bi-shield-fill"></i>
                        {!isCollapsed && <span className="ms-2">Estatus</span>}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/amenazas/" className={`sidebar-link ${location.pathname === "/amenazas/" ? "active" : ""}`}>
                        <i class="bi bi-exclamation-diamond-fill"></i>
                        {!isCollapsed && <span className="ms-2">Amenazas</span>}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/alimentos/" className={`sidebar-link ${location.pathname === "/alimentos/" ? "active" : ""}`}>
                        <i class="bi bi-patch-plus-fill"></i>
                        {!isCollapsed && <span className="ms-2">Alimentos</span>}
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="sidebar-item">
                    <a href="/agregar_usuarios/" className={`sidebar-link ${location.pathname === "/agregar_usuarios/" ? "active" : ""}`}>
                    <i className="bi bi-person-plus"></i>
                    {!isCollapsed && <span className="ms-2">Agregar Usuarios</span>}
                    </a>
                </li>
                </ul>
                <div className="sidebar-footer">
                    <a className={`sidebar-item ${!isCollapsed ? "expanded" : ""}`}  href="#">
                    <i className="bi bi-box-arrow-left"></i>
                    {!isCollapsed && <span className="ms-2">Salir</span>}
                    </a>  
                </div>
            </aside>
            </div>
        );  
};

export default SideBar;