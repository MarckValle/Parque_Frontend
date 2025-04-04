import React from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import Summary from "../../../Components/Dashboard/Summary/Summary";
import '/src/assets/styles/Dashboard/Dashboard.css'

function DashboardPage(){
    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="main-content flex-grow-1">
                <NavBar name='Dashboard' />
            <main>
                <Summary/>
            </main>
            </div>
        </div>
    );
};

export default DashboardPage;