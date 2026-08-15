//Importación de la imagen para visualización en el componente infoSection
import foto2 from "../Assets/img/foto2.jpeg";

//Componente infoSection donde se muestra la presentación de la artista
function InfoSection(){
return(
    <section className = "section" id = "infoArtista">
        <div className = "fotoartista">
            <img src={foto2} alt="foto de la artista"/>
        </div>
        <div className = "section-content">
            <h1>SOBRE MI</h1>
            <p>Soy Laura Cuecha Pescador, artista visual nacida en Pereira. Mi trayectoria artística se ha desarrollado durante aproximadamente diez años, explorando diferentes formas de expresión y creación desde las artes visuales.
                Soy Licenciada en Artes Visuales de la Universidad Tecnológica de Pereira (UTP) y he desarrollado mi experiencia en diferentes campos del arte. Además de mi trabajo como artista, me desempeño como docente y tallerista de artes, espacios en los que busco compartir conocimientos y acercar a otras personas a la creación artística.
                A lo largo de mi trayectoria también he participado en proyectos y colaboraciones como asistente de arte, ampliando mi experiencia dentro de diferentes procesos de producción audiovisual y artística. Paralelamente, he encontrado en el tatuaje otra forma de expresión y creación, integrando el dibujo y el lenguaje visual a nuevos formatos.
                Mi trabajo nace del interés por explorar distintas posibilidades del arte y por convertir cada experiencia en una oportunidad para crear, aprender y compartir..
            </p>
        </div>
    </section>
);
}
export default InfoSection;