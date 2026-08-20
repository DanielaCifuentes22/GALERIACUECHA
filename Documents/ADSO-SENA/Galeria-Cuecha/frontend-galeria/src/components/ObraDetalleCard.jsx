import '../style/ObraDetalleCard.css';

function ObraDetalleCard({ obra }) {
    return (
        <article className="obra-detalle-card">

            <div className="obra-detalle-imagenes">
                <img
                    src={obra.imagen}
                    alt={obra.titulo}
                />
                <img
                    src={obra.imagenSecundaria}
                    alt={`${obra.titulo} - vista adicional`}
                />
            </div>

            {/* Información de la obra */}
            <div className="obra-detalle-informacion">

                <h1>{obra.titulo}</h1>

                <span>Técnica</span>
                <p>{obra.tecnica}</p>

                <span>Año</span>
                <p>{obra.anio}</p>

                <span>Dimensiones</span>
                <p>{obra.dimensiones}</p>

                <button className="card-boton">
                    Comprar
                </button>

            </div>

        </article>
    );
}

export default ObraDetalleCard;