import React, {useState} from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import StatusTable from "../../../Components/Dashboard/Table/StatusTable/StatusTable";
import StatusForm from "../../../Components/Dashboard/Forms/StatusForm/StatusForm";

function StatusPage(){

    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setRefreshKey((prev) => prev + 1); // Incrementa el refreshKey para refrescar la tabla
    };

    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="main-content flex-grow-1">
                <NavBar name='Estatus' />
            <main>
                <StatusForm onAdd={handleRefresh} /> 
                <StatusTable refreshKey={refreshKey} /> 
            </main>
            </div>
        </div>
    );
};

export default StatusPage;