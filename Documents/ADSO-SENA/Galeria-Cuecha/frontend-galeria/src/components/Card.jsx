// Importación de estilos de la tarjeta
import '../style/Card.css';
// Componente reutilizable para mostrar una obra.
function Card({ imagen, titulo }) {
    return (
        <div className="card">
            <img
                src={imagen}
                alt={titulo}
                className="card-imagen"
            />
            <div className="card-overlay">

                <button className="card-boton">
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