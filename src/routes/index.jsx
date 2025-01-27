import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from '../pages/Login/Login';
import ForgotPass from '../pages/ForgotPassword/ForgotPassword'

function AppRoutes(){
    return (

        <Router>
            <Routes>
                <Route path='/login_administrador' element={<Login/>}  />
                <Route path='/reestablecer_pass' element={<ForgotPass/>}  />
            </Routes>
        </Router>

    )
}

export default AppRoutes;