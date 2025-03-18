import loadable from '@loadable/component';
import {  Routes, Route } from 'react-router-dom';
import PlataformRoutes from "./Plataform/PlataformIndex";
import { ClipLoader } from "react-spinners";
// Spinner común para todos los componentes
const LoadingSpinner = () => (
  <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
    <ClipLoader color="#36d7b7" size={100} />
  </div>
);

// Componentes de administrador con loadable
const Login = loadable(() => import("../pages/Login/Login"), {
  fallback: <LoadingSpinner />
});
const ForgotPass = loadable(() => import("../pages/ForgotPassword/ForgotPassword"), {
  fallback: <LoadingSpinner />
});
const DashboardPage = loadable(() => import("../pages/Administrator/Dashboard/DashboardPage"), {
  fallback: <LoadingSpinner />
});
const ValidatePage = loadable(() => import("../pages/Administrator/ValidateSigh/ValidatePage"), {
  fallback: <LoadingSpinner />
});
const AnimalsPage = loadable(() => import("../pages/Administrator/Animals/AnimalsPage"), {
  fallback: <LoadingSpinner />
});
const HabitatsPage = loadable(() => import("../pages/Administrator/Habitats/HabitatsPage"), {
  fallback: <LoadingSpinner />
});
const StatusPage = loadable(() => import("../pages/Administrator/Status/StatusPage"), {
  fallback: <LoadingSpinner />
});
const UsersPage = loadable(() => import("../pages/Administrator/Users/UsersPage"), {
  fallback: <LoadingSpinner />
});

function AppRoutes() {
  return (
      <Routes>
        {/* Rutas de administrador */}
        <Route path="/login_administrador/" element={<Login />} />
        <Route path="/reestablecer_pass/" element={<ForgotPass />} />
        <Route path="/dashboard/" element={<DashboardPage />} />
        <Route path="/validar_avistamientos/" element={<ValidatePage />} />
        <Route path="/animales/" element={<AnimalsPage />} />
        <Route path="/habitats/" element={<HabitatsPage />} />
        <Route path="/estatus/" element={<StatusPage />} />
        <Route path="/agregar_usuarios/" element={<UsersPage />} />
        
        {/* Rutas de plataforma */}
        <Route path="/*" element={<PlataformRoutes />} />
      </Routes>
  );
}

export default AppRoutes;