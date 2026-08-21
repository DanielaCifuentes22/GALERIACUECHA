import "../style/Obras.css";
// Importación del componente reutilizable para las obras.
import Card from '../components/Card';
import estudioanatomico1 from '../Assets/img/estudioanatomico1.JPG';
import estudioanatomico2 from '../Assets/img/estudioanatomico2.jpg';
import estudioanatomico3 from '../Assets/img/estudioanatomico3.JPG';
import estudioanatomico4 from '../Assets/img/estudioanatomico4.JPG';

function EstudioAnatomico() {
    return (
        <section className="pagina-obras">
            <h1>Estudio Anatomico</h1>
            <div className="galeria-obras">

                <Card
                    id="estudioanatomico1"
                    imagen={estudioanatomico1}
                    titulo="Obra de estudio anatomico"
                />

                <Card
                    id="estudioanatomico2"
                    imagen={estudioanatomico2}
                    titulo="Obra de estudio anatomico"
                />

                <Card
                    id="estudioanatomico3"
                    imagen={estudioanatomico3}
                    titulo="Obra de estudio anatomico"
                />

                <Card
                    id="estudioanatomico4"
                    imagen={estudioanatomico4}
                    titulo="Obra de estudio anatomico"
                />

            </div>

        </section>
    );
}

export default EstudioAnatomico;