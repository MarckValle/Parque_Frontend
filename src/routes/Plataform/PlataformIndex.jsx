import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

// Usamos loadable en lugar de lazy
const IndexPage = loadable(() => import('../../pages/Plataform/Index/IndexPage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const ShareV = loadable(() => import("../../pages/Plataform/ShareV/SharePage"), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const UsPage = loadable(() => import('../../pages/Plataform/Us/UsPage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const RegistersPage = loadable(() => import('../../pages/Plataform/Registers/RegistersPage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const VideosPage = loadable(() => import('../../pages/Plataform/Registers/Videos/VideosPage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const InfoPage = loadable(() => import('../../pages/Plataform/Registers/Info/InfoPage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const ContactPage = loadable(() => import('../../pages/Plataform/Contact/ContactPage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const GamesPage = loadable(() => import('../../pages/Plataform/Games/GamesPage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const MemoramaPage = loadable(() => import('../../pages/Plataform/Games/Memorama/MemoramaPage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const GuessImagePage = loadable(() => import('../../pages/Plataform/Games/GuessImagePage/GuessImagePage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});
const PuzzlePage = loadable(() => import('../../pages/Plataform/Games/Puzzle/PuzzlePage'), {
  fallback: <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
});

function PlataformRoutes() {
    return (
        <Routes>
            <Route path='/home/' element={<IndexPage />} />
            <Route path='/avistamientos/' element={<ShareV />} />
            <Route path='/nosotros/' element={<UsPage />} />
            <Route path='/flora_fauna/' element={<RegistersPage />} />
            <Route path='/videos/' element={<VideosPage />} />
            <Route path="/informacion/:registerId" element={<InfoPage />} />
            <Route path='/contacto/' element={<ContactPage />} />
            <Route path='/juegos/' element={<GamesPage />} />
            <Route path='/memorama/' element={<MemoramaPage />} />
            <Route path='/adivina_la_imagen/' element={<GuessImagePage />} />
            <Route path='/rompecabezas/' element={<PuzzlePage />} />
        </Routes>
    );
}

export default PlataformRoutes;