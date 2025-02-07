import React from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import ValidateSig from "../../../Components/Dashboard/ValidateSi/ValidateSi";

function ValidatePage(){
    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="flex-grow-1">
                <NavBar name='Validar Avistamientos' />
            <main className="">
                <ValidateSig/>
            </main>
            </div>
        </div>
    )
}

export default ValidatePage;