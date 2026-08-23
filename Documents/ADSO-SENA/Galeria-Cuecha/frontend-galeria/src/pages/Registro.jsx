// Importa las herramientas necesarias de React
import { useState } from "react";

// Importa los estilos de la página de registro
import "../style/Registro.css";

function Registro() {

    // Guarda la información ingresada en el formulario
    const [formulario, setFormulario] = useState({
        nombres: "",
        apellidos: "",
        documento: "",
        direccion: "",
        telefono: "",
        correo: "",
        contraseña: ""
    });

    // Guarda el mensaje que se mostrará después de enviar el formulario
    const [mensaje, setMensaje] = useState("");

    // Actualiza los datos del formulario cuando el usuario escribe
    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    // Envía los datos del formulario al backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await fetch(
                "http://localhost:3000/api/usuarios/registro",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formulario)
                }
            );

            const datos = await respuesta.json();

            // Muestra el mensaje recibido desde el backend
            setMensaje(datos.mensaje);

            // Limpia el formulario si el registro fue exitoso
            if (respuesta.ok) {
                setFormulario({
                    nombres: "",
                    apellidos: "",
                    documento: "",
                    direccion: "",
                    telefono: "",
                    correo: "",
                    contraseña: ""
                });
            }

        } catch (error) {
            console.error("Error al registrar cliente:", error);
            setMensaje("No fue posible conectar con el servidor");
        }
    };

    return (
        <main className="registro-container">

            <div className="registro-card">

                <h1>Crear cuenta</h1>

                <p>Completa tus datos para registrarte</p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="nombres"
                        placeholder="Nombres"
                        value={formulario.nombres}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="apellidos"
                        placeholder="Apellidos"
                        value={formulario.apellidos}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="documento"
                        placeholder="Documento"
                        value={formulario.documento}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                        value={formulario.direccion}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Teléfono"
                        value={formulario.telefono}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="correo"
                        placeholder="Correo electrónico"
                        value={formulario.correo}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                        value={formulario.contraseña}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Registrarse
                    </button>

                </form>

                {mensaje && (
                    <p className="registro-mensaje">
                        {mensaje}
                    </p>
                )}

            </div>

        </main>
    );
}

export default Registro;