import "../style/Obras.css";
// Importación del componente reutilizable para las obras.
import Card from '../components/Card';
import dibujo1 from '../Assets/img/dibujo1.JPG';
import dibujo2 from '../Assets/img/dibujo2.jpg';
import dibujo3 from '../Assets/img/dibujo3.JPG';
import dibujo4 from '../Assets/img/dibujo4.JPG';

function Dibujo() {
    return (
        <section className="pagina-obras">
            <h1>Dibujo</h1>
            <div className="galeria-obras">

                <Card
                    id="dibujo1"
                    imagen={dibujo1}
                    titulo="Obra de dibujo"
                />

                <Card
                    id="dibujo2"
                    imagen={dibujo2}
                    titulo="Obra de dibujo"
                />

                <Card
                    id="dibujo3"
                    imagen={dibujo3}
                    titulo="Obra de dibujo"
                />

                <Card
                    id="dibujo4"
                    imagen={dibujo4}
                    titulo="Obra de dibujo"
                />

            </div>

        </section>
    );
}

export default Dibujo;