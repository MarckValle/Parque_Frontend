import React from "react";
import SideBar from "../../../Components/Dashboard/sideBar/sideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";


function DashboardPage(){
    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="main-content flex-grow-1">
                <NavBar name='Dashboard' />
            <main className="content">

            </main>
            </div>
        </div>
    );
};

export default DashboardPage;