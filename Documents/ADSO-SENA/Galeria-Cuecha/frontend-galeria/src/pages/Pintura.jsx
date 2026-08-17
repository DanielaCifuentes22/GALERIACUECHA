import "../style/Pintura.css";
// Importación del componente reutilizable para las obras.
import Card from '../components/Card';
import pintura1 from '../Assets/img/pintura1.JPG';
import pintura2 from '../Assets/img/pintura2.JPG';
import pintura3 from '../Assets/img/pintura3.JPG';
import pintura4 from '../Assets/img/pintura4.jpg';

function Pintura() {
    return (
        <section className="pagina-pintura">
            <h1>Pintura</h1>
            <div className="galeria-pintura">

                <Card
                    imagen={pintura1}
                    titulo="Obra de pintura"
                />

                <Card
                    imagen={pintura2}
                    titulo="Obra de pintura"
                />

                <Card
                    imagen={pintura3}
                    titulo="Obra de pintura"
                />

                <Card
                    imagen={pintura4}
                    titulo="Obra de pintura"
                />

            </div>

        </section>
    );
}

export default Pintura;