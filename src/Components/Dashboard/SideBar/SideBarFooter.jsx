import React from "react";
import '/src/assets/styles/sidebar.css'
function SideBarFooter(){
    return (
        <div className="sidebar-footer">
            <a href="">
                <i class="bi bi-box-arrow-left"></i>
                <span className="ms-2">Salir</span>
            </a>
        </div>
    );
};

export default SideBarFooter;