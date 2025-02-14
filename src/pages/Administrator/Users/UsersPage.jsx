import React, {useState} from "react";
import SideBar from "../../../Components/Dashboard/SideBar/SideBar";
import NavBar from "../../../Components/Dashboard/Navbar/Navbar";
import '/src/assets/styles/Dashboard/Dashboard.css'
import UserForm from "../../../Components/Dashboard/Forms/UsersForm/UsersForm";
import UsersTable from "../../../Components/Dashboard/Table/UsersTable/UsersTable";


function UsersPage(){
    const [refreshKey, setRefreshKey] = useState(0);
        
            const handleRefresh = () => {
                setRefreshKey((prev) => prev + 1); // Incrementa el refreshKey para refrescar la tabla
            };
    return (
        <div className="app-container d-flex">
                <SideBar />
            <div className="main-content flex-grow-1">
                <NavBar name='Usuarios' />
            <main>
                <UserForm onAdd={handleRefresh} />
                <UsersTable refreshKey={refreshKey} />
            </main> 
            </div>
        </div>
    );
};

export default UsersPage;