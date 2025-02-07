import React, {useState} from "react";

function SideBarFooter(  ){

    const [isCollapsed, setIsCollapsed] = useState(true);
    
    

    return (
        <div className="sidebar-footer">
            <a className={`sidebar-item ${!isCollapsed ? "expanded" : ""}`}  href="#">
            <i className="bi bi-box-arrow-left"></i>
            {!isCollapsed && <span className="ms-2">Salir</span>}
            </a>  
        </div>
    );
};

export default SideBarFooter;