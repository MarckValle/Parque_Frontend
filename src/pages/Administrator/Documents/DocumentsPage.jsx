import React, {useState} from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import Documents from "../../../Components/Dashboard/Documents/Documents";

function ValidatePage(){

    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="flex-grow-1">
                <NavBar name='Agregar registros de alimentos' />
            <main className="">
                <Documents></Documents>
            </main>
            </div>
        </div>
    )
}

export default ValidatePage;