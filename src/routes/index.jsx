import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login/Login';

function AppRoutes(){
    return (

        <Router>
            <Routes>
                <Route path='/login_administrator' element={<Login/>}  />
            </Routes>
        </Router>

    )
}

export default AppRoutes;