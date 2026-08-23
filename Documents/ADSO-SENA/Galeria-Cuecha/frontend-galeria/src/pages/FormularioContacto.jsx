import "../style/FormularioContacto.css";
//Página para envío de solicitudes como formulario.
function FormularioContacto(){
    return(
        <section className = "section1" id = "contacto">
            <h2>Formulario de contacto</h2>
            <form className = "form" action="">
                <label htmlFor="">
                    Nombre:
                    <input type="text" placeholder="Escriba su nombre completo"/>
                </label>
                <label htmlFor="">
                    Correo:
                    <input type="text" placeholder="Escriba su correo" />
                </label>
                <label>
                    Tipo de solicitud:
                    {/*menú desplegable para selección de tipo de solicitud*/}
                    <select>
                        <option value="">Seleccione una opción</option>
                        <option value="pqr">PQR</option>
                        <option value="inscripcion">Inscripción</option>
                        <option value="soporte">Soporte técnico</option>
                        <option value="entrevista">Entrevista</option>
                        <option value="colaboracion">Colaboración</option>
                    </select>
                </label>
                <label htmlFor="">
                    Mensaje:
                    <input type="text" placeholder="Escribe su mensaje"/>
                </label>
                <button className = "boton" type="submit">Enviar</button>
            </form>
        </section>
    );
}
export default FormularioContacto;