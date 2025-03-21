import React, {useState} from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import ThreatsForm from "../../../Components/Dashboard/Forms/ThreatsForm/ThreatsForm";
import ThreatTable from "../../../Components/Dashboard/Table/ThreatTable/ThreatTable";
function ValidatePage(){

    const [refreshKey, setRefreshKey] = useState(0);
    
        const handleRefresh = () => {
            setRefreshKey((prev) => prev + 1); // Incrementa el refreshKey para refrescar la tabla
        };

    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="flex-grow-1">
                <NavBar name='Agregar registros de amenazas' />
            <main className="">
                <ThreatsForm onAdd={handleRefresh}></ThreatsForm>
                <ThreatTable refreshKey={refreshKey}></ThreatTable>
            </main>
            </div>
        </div>
    )
}

export default ValidatePage;