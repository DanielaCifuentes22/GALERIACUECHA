import { useState } from "react";
//Importación de las imagenes para visualización en el componente Hero
import foto1 from "../img/foto1.jpeg";

//Componente Hero donde se muestra la presentación de la galería
function Hero(){
return(
    <section className = "hero" id = "inicio">
        <div className = "fotoartista">
            <img src={foto1} alt="foto de la artista"/>
        </div>
        <div className = "hero-content">
            <h1>GALERIA VIRTUAL CUECHA</h1>
            <p>Soy pintura y dibujante. Mi trabajo explora la delicadeza de la acuarela
                y la profundidad del grafito y el carboncillo para construir imágenes
                en las que la memoria, la magia y la espiritualidad se entrelazan.
            </p>
        </div>
    </section>
);
}
export default Hero;