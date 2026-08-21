// Importación de herramientas para gestionar la navegación
import { useLocation } from "react-router-dom";
// Importación de la card que muestra la información detallada de la obra
import ObraDetalleCard from "../components/ObraDetalleCard";
// Importación de las imágenes de las obras
import pintura1 from "../Assets/img/pintura1.JPG";
import pintura1Detalle from "../Assets/img/pintura1Detalle.JPG";

import pintura2 from "../Assets/img/pintura2.JPG";
import pintura2Detalle from "../Assets/img/pintura2Detalle.JPG";

import pintura3 from "../Assets/img/pintura3.JPG";
import pintura3Detalle from "../Assets/img/pintura3Detalle.jpg";

import pintura4 from "../Assets/img/pintura4.jpg";
import pintura4Detalle from "../Assets/img/pintura4Detalle.jpg";

import dibujo1 from "../Assets/img/dibujo1.JPG";
import dibujo1Detalle from "../Assets/img/dibujo1Detalle.JPG";

import dibujo2 from "../Assets/img/dibujo2.jpg";
import dibujo2Detalle from "../Assets/img/dibujo2Detalle.JPG";

import dibujo3 from "../Assets/img/dibujo3.JPG";
import dibujo3Detalle from "../Assets/img/dibujo3Detalle.JPG";

import dibujo4 from "../Assets/img/dibujo4.JPG";
import dibujo4Detalle from "../Assets/img/dibujo4Detalle.JPG";

import estudioanatomico1 from "../Assets/img/estudioanatomico1.JPG";
import estudioanatomico1Detalle from "../Assets/img/estudioanatomico1Detalle.JPG";

import estudioanatomico2 from "../Assets/img/estudioanatomico2.jpg";
import estudioanatomico2Detalle from "../Assets/img/estudioanatomico2Detalle.jpg";

import estudioanatomico3 from "../Assets/img/estudioanatomico3.JPG";
import estudioanatomico3Detalle from "../Assets/img/estudioanatomico3Detalle.JPG";

import estudioanatomico4 from "../Assets/img/estudioanatomico4.JPG";
import estudioanatomico4Detalle from "../Assets/img/estudioanatomico4Detalle.JPG";

function ObraDetalle() {
     // Obtiene la información enviada desde la página anterior
    const location = useLocation();
     // Recupera los datos de la obra seleccionada
    const obraSeleccionada = location.state?.obra;

    // Información de las obras disponibles
    const obras = {

        pintura1: {
            imagen: pintura1,
            imagenSecundaria: pintura1Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

        pintura2: {
            imagen: pintura2,
            imagenSecundaria: pintura2Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

        pintura3: {
            imagen: pintura3,
            imagenSecundaria: pintura3Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

        pintura4: {
            imagen: pintura4,
            imagenSecundaria: pintura4Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

         dibujo1: {
            imagen: dibujo1,
            imagenSecundaria: dibujo1Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

         dibujo2: {
            imagen: dibujo2,
            imagenSecundaria: dibujo2Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

         dibujo3: {
            imagen: dibujo3,
            imagenSecundaria: dibujo3Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

         dibujo4: {
            imagen: dibujo4,
            imagenSecundaria: dibujo4Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

         estudioanatomico1: {
            imagen: estudioanatomico1,
            imagenSecundaria: estudioanatomico1Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

         estudioanatomico2: {
            imagen: estudioanatomico2,
            imagenSecundaria: estudioanatomico2Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

         estudioanatomico3: {
            imagen: estudioanatomico3,
            imagenSecundaria: estudioanatomico3Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        },

         estudioanatomico4: {
            imagen: estudioanatomico4,
            imagenSecundaria: estudioanatomico4Detalle,
            titulo: "--",
            tecnica: "--",
            anio: "--",
            dimensiones: "-- cm"
        }

    };

  // Busca la información correspondiente a la obra seleccionada
    const obra = obras[obraSeleccionada];

    // Mensaje que se muestra si no se encuentra información de la obra
    if (!obra) {
        return (
            <section className="obra-detalle">
                <h1>Obra no encontrada</h1>
            </section>
        );
    }

    return (
        <section className="obra-detalle">

            <ObraDetalleCard obra={obra} />

        </section>
    );
}

export default ObraDetalle;