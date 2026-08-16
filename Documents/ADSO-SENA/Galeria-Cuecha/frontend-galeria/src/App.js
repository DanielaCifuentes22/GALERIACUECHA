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

      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
