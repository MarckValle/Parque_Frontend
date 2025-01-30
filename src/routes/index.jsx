import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from '../pages/Login/Login';
import ForgotPass from '../pages/ForgotPassword/ForgotPassword'
import DashboardPage from '../pages/Administrator/Dashboard/Dashboardpage';

function AppRoutes(){
    return (

        <Router>
            <Routes>
                <Route path='/login_administrador' element={<Login/>}  />
                <Route path='/reestablecer_pass' element={<ForgotPass/>}  />
                <Route path='/dashboard' element={<DashboardPage/>}  />
            </Routes>
        </Router>

    )
}

export default AppRoutes;