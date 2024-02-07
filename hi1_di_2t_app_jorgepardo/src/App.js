import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './sobreNosotros';
import Principal from './principal';
import Registro from './registro';
import Inicio from './inicioSesion';
import Noticias from './noticias';

function App() {
  return (
    <Router>
      <header className='App'>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/principal" className="nav-link active">Principal</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobreNosotros" className="nav-link" >Sobre el Proyecto</Link>
          </li>
          <li className="nav-item">
            <Link to="/noticias" className="nav-link" >Noticias</Link>
          </li>
          <li className="nav-item">
            <Link to="/registro" className="nav-link" >Registrarse</Link>
          </li>
          <li className="nav-item">
            <Link to="/inicioSesion" className="nav-link" >Iniciar Sesion</Link>
          </li>

        </ul>
      </header>
      <Routes>
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicioSesion" element={<Inicio />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </Router>   
  );
}
export default App;
