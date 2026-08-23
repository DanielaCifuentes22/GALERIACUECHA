// Importación de herramientas para gestionar la navegación
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importación de los componentes principales
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
// Importación de las páginas
import SobreGaleria from './pages/SobreGaleria';
import ObrasDestacadas from './pages/ObrasDestacadas';
import Novedades from './pages/Novedades';
import Pintura from './pages/Pintura';
import ObraDetalle from './pages/ObraDetalle';
import Dibujo from './pages/Dibujo';
import EstudioAnatomico from './pages/EstudioAnatomico';
import Talleres from './pages/Talleres';
import ClasesPersonalizadas from './pages/ClasesPersonalizadas';
import Exposiciones from './pages/Exposiciones';
import Entrevistas from './pages/Entrevistas';
import Colaboraciones from './pages/Colaboraciones';
import FormularioContacto from './pages/FormularioContacto';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
// Estilos generales de la aplicación
import './style/App.css';

function App() {
  return (
    // Contenedor principal para la navegación de la aplicación
    <BrowserRouter>

      <Header/>

      <Routes>
        {/* Definición de las rutas de navegación */}
        <Route
          path="/"
          element={
            <>
              <Hero/>
              <InfoSection/>
            </>
          }
        />
        
        <Route
          path="/sobre-galeria"
          element={<SobreGaleria/>}
        />
        <Route
          path="/obras-destacadas"
          element={<ObrasDestacadas />}
        />
        <Route
          path="/novedades"
          element={<Novedades />}
        />
        <Route
          path="/pintura"
          element={<Pintura />}
        />
        <Route
          path="/obra-detalle"
          element={<ObraDetalle />}
        />
         <Route
          path="/dibujo"
          element={<Dibujo />}
        />
         <Route
          path="/estudio-anatomico"
          element={<EstudioAnatomico />}
        />
         <Route
          path="/talleres"
          element={<Talleres />}
        />
        <Route
          path="/clases-personalizadas"
          element={<ClasesPersonalizadas />}
        />
         <Route
          path="/exposiciones"
          element={<Exposiciones />}
        />
        <Route
          path="/entrevistas"
          element={<Entrevistas />}
        />
         <Route
          path="/colaboraciones"
          element={<Colaboraciones />}
        />
        <Route
          path="/formulario-contacto"
          element={<FormularioContacto />}
        />
        <Route
          path="/preguntas-frecuentes"
          element={<PreguntasFrecuentes />}
        />
      </Routes>
      

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
