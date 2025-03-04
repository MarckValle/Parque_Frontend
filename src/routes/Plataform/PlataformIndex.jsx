import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import IndexPage from '../../pages/Plataform/Index/IndexPage';
import ShareV from "../../pages/Plataform/ShareV/SharePage"
import UsPage from '../../pages/Plataform/Us/UsPage';
import RegistersPage from '../../pages/Plataform/Registers/RegistersPage';
import VideosPage from '../../pages/Plataform/Registers/Videos/VideosPage';
import InfoPage from '../../pages/Plataform/Registers/Info/InfoPage';
import ContactPage from '../../pages/Plataform/Contact/ContactPage';
import GamesPage from '../../pages/Plataform/Games/GamesPage';
import MemoramaPage from '../../pages/Plataform/Games/Memorama/MemoramaPage';
import GuessImagePage from '../../pages/Plataform/Games/GuessImagePage/GuessImagePage';
import PuzzlePage from '../../pages/Plataform/Games/Puzzle/PuzzlePage';

function PlataformRoutes(){
    return (

            <Routes>
                <Route path='/home/' element={<IndexPage/>}  />
                <Route path='/avistamientos/' element={<ShareV/>}  />
                <Route path='/nosotros/' element={<UsPage/>}  />
                <Route path='/flora_fauna/' element={<RegistersPage/>}  />
                <Route path='/videos/' element={<VideosPage/>}  />
                <Route path="/informacion/:registerId" element={<InfoPage/>}  />
                <Route path='/contacto/' element={<ContactPage/>}  />
                <Route path='/juegos/' element={<GamesPage/>}  />
                <Route path='/memorama/' element={<MemoramaPage/>}  />
                <Route path='/adivina_la_imagen/' element={<GuessImagePage/>}  />
                <Route path='/rompecabezas/' element={<PuzzlePage/>}  />
            </Routes>

    )
}

export default PlataformRoutes;