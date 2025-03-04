import './App.css/';
import  AppRoutes  from './routes/index';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
  
}

export default App;
