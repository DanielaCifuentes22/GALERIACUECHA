//Importación del componente para selección del idioma
import IdiomaMenu from './IdiomaMenu';
//Importación de las imagenes para el encabezado
import logogaleria from "../Assets/img/logogaleria.png";
import ubicacion from "../Assets/img/ubicacion.png";
//Importación de imagenes usados como iconos para redes sociales.
import facebook from "../Assets/img/facebook.png";
import instagram from "../Assets/img/instagram.png";
import whatsapp from "../Assets/img/whatsapp.png";

//Componente Header que muestra el encabezado
function Header(){
    return(
        <header className = "header">
            <div className = "logo">
                <img src={logogaleria} alt="logo de la galeria"/>
            </div>
            {/* Menú principal de navegación*/}
            <nav className = "nav">
                <a href="#inicio">INICIO</a>
                <a href="#obras">OBRAS</a>
                <a href="#exposiciones">ACTIVIDADES</a>
                <a href="#tienda">CONTACTO</a>
                <a href="#sobre mí">INICIAR SESIÓN</a>
            </nav>
            <div className="iconosMenu">

                <a
                    href="https://www.facebook.com/share/19LC8ncekp/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={facebook} alt="Facebook" />
                </a>

                <a
                    href="https://www.instagram.com/cuecha_?igsh=Y3l1MjFrMTVkZ2d3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={instagram} alt="Instagram" />
                </a>

                <a
                    href="https://wa.me/573106144502"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={whatsapp} alt="Whatsapp" />
                </a>
                <img src={ubicacion} alt="ubicación"/>
                <IdiomaMenu />
            </div>
        </header>
    );
}
export default Header;