import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from '../pages/Login/Login';
import ForgotPass from '../pages/ForgotPassword/ForgotPassword';
import DashboardPage from '../pages/Administrator/Dashboard/DashboardPage';
import ValidatePage from '../pages/Administrator/ValidateSigh/ValidatePage';
import AnimalsPage from '../pages/Administrator/Animals/AnimalsPage';
import HabitatsPage from '../pages/Administrator/Habitats/HabitatsPage';
import StatusPage from '../pages/Administrator/Status/StatusPage';
import UsersPage from '../pages/Administrator/Users/UsersPage';
import PlataformRoutes from './Plataform/PlataformIndex';
function AppRoutes(){
    return (

        
            <Routes>
                <Route path='/login_administrador/' element={<Login/>}  />
                <Route path='/reestablecer_pass/' element={<ForgotPass/>}  />
                <Route path='/dashboard/' element={<DashboardPage/>}  />
                <Route path='/validar_avistamientos/' element={<ValidatePage/>}  />
                <Route path='/animales/' element={<AnimalsPage/>}  />
                <Route path='/habitats/' element={<HabitatsPage/>}  />
                <Route path='/estatus/' element={<StatusPage/>}  />
                <Route path='/agregar_usuarios/' element={<UsersPage/>}  />
                <Route path='/*' element={<PlataformRoutes/>} ></Route>
            </Routes>

        

    )
}

export default AppRoutes;