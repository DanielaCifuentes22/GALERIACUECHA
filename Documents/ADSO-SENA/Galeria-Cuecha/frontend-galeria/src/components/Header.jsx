//Importación del componente para selección del idioma
import IdiomaMenu from './IdiomaMenu';
//Importación de las imagenes usados como iconos
import logogaleria from "../Assets/img/logogaleria.png";
import ubicacion from "../Assets/img/ubicacion.png";
//Importación de imagenes usados como iconos para redes sociales.
import facebook from "../Assets/img/facebook.png";
import instagram from "../Assets/img/instagram.png";
import whatsapp from "../Assets/img/whatsapp.png";
import carrocompras from "../Assets/img/carrocompras.png";
// Importa los Hooks para controlar el menú desplegable
import { useState, useEffect } from "react";

//Componente Header que muestra el encabezado
function Header(){
    // Estado que controla cuál menú desplegable está abierto
    const [menuAbierto, setMenuAbierto] = useState(null);
    // Cierra el menú cuando el usuario hace clic fuera de la navegación
    useEffect(() => {
        const cerrarMenu = (event) => {
         // Verifica si el clic ocurrió fuera del menú
         if (!event.target.closest(".nav")) {
            setMenuAbierto(null);
         }
        };
        // Detecta los clics realizados en la página
        document.addEventListener("click", cerrarMenu);

        return () => {
        // Elimina el evento cuando el componente se desmonta
         document.removeEventListener("click", cerrarMenu);
        };
    }, []);
    return(
        <header className = "header">
            <div className = "logo">
                <img src={logogaleria} alt="logo de la galeria"/>
            </div>
            {/* Menú principal de navegación desplegable*/}
            <nav className="nav">

            <div className="menu-item">
                <button onClick={() => setMenuAbierto(menuAbierto === "inicio" ? null : "inicio")}>
                 INICIO
                </button>

                {menuAbierto === "inicio" && (
                    <div className="submenu">
                        <a href="/sobre-galeria">Sobre la galería</a>
                        <a href="/obras-destacadas">Obras destacadas</a>
                        <a href="#Novedades">Novedades</a>
                    </div>
                )}  
            </div>

            <div className="menu-item">
                <button onClick={() => setMenuAbierto(menuAbierto === "obras" ? null : "obras")}>
                 OBRAS
                </button>

                {menuAbierto === "obras" && (
                    <div className="submenu">
                        <a href="#pintura">Pintura</a>
                        <a href="#dibujo">Dibujo</a>
                        <a href="#estudio-anatomico">Estudio anatómico</a>
                    </div>
                )}
            </div>

            <div className="menu-item">
                <button onClick={() => setMenuAbierto(menuAbierto === "actividades" ? null : "actividades")}>
                 ACTIVIDADES
                </button>

                 {menuAbierto === "actividades" && (
                    <div className="submenu">
                        <a href="#talleres">Talleres</a>
                        <a href="#clases-personalizadas">Clases personalizadas</a>
                        <a href="#exposiciones">Exposiciones</a>
                        <a href="#entrevistas">Entrevistas</a>
                        <a href="#colaboraciones">Colaboraciones</a>
                    </div>
                )}
            </div>

            <div className="menu-item">
                <button onClick={() => setMenuAbierto(menuAbierto === "contacto" ? null : "contacto")}>
                 CONTACTO
                </button>

                {menuAbierto === "contacto" && (
                    <div className="submenu">
                        <a href="#formulario-contacto">Formulario de contacto</a>
                        <a href="#preguntas-frecuentes">Preguntas frecuentes</a>
                    </div>
                )}
            </div>

            <div className="menu-item">
                <button onClick={() => setMenuAbierto(menuAbierto === "login" ? null : "login")}>
                 INICIAR SESIÓN
                </button>

                {menuAbierto === "login" && (
                    <div className="submenu">
                        <a href="#iniciar-sesion">Acceder</a>
                        <a href="#registrarse">Registrarse</a>
                    </div>
                 )}
            </div>
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
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Plaza+de+Bolivar+Pereira"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                 <img src={ubicacion} alt="Ubicación" />
                </a>
                 <img src={carrocompras} alt="Carrito de compras"/>
                <IdiomaMenu />
            </div>
        </header>
    );
}
export default Header;