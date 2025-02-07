import React from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import '/src/assets/styles/Dashboard/Dashboard.css'

function UsersPage(){
    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="main-content flex-grow-1">
                <NavBar name='Usuarios' />
            <main>
            </main>
            </div>
        </div>
    );
};

export default UsersPage;