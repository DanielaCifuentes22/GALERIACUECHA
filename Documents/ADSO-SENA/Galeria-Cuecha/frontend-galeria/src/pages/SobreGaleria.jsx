import fotogaleria from "../Assets/img/fotogaleria.jpeg";
import "../style/SobreGaleria.css";

function SobreGaleria() {
    return (
        <section className="sobre-galeria">

            <h1>Sobre la galería</h1>

            <img
                src={fotogaleria}
                alt="Galería Cuecha"
            />

            <p>
                Galería Virtual Cuecha es un espacio dedicado a compartir
                y visibilizar el trabajo artístico de Laura Cuecha Pescador,
                reuniendo obras y proyectos que reflejan su trayectoria,
                creatividad y exploración dentro de las artes visuales.
            </p>

        </section>
    );
}

export default SobreGaleria;