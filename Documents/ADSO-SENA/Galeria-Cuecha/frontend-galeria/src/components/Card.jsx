// Importación de la herramienta para gestionar la navegación
import { useNavigate } from 'react-router-dom';
// Importación de estilos de la tarjeta
import '../style/Card.css';
// Componente reutilizable para mostrar una obra.
function Card({ id, imagen, titulo }) {
     // Permite realizar la navegación entre las páginas
    const navigate = useNavigate();

    // Navega hacia la página de detalle de la obra
    const verDetalles = () => {
        navigate('/obra-detalle', {
            state: {
                obra: id
            }
        });
    }
    return (
        <div className="card">
            <img
                src={imagen}
                alt={titulo}
                className="card-imagen"
            />
            <div className="card-overlay">

                <button className="card-boton" onClick={verDetalles}>
                    Detalles
                </button>

                <button className="card-boton">
                    Comprar
                </button>

            </div>

        </div>
    );
}

export default Card;