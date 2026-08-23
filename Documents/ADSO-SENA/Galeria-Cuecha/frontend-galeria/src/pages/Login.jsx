// Importa las herramientas necesarias de React
import { useState } from "react";

// Importa los estilos de la página de inicio de sesión
import "../style/Login.css";

function Login() {

    // Guarda los datos ingresados por el usuario
    const [formulario, setFormulario] = useState({
        correo: "",
        contraseña: ""
    });

    // Guarda el mensaje que devuelve el servidor
    const [mensaje, setMensaje] = useState("");

    // Actualiza los datos del formulario
    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    // Envía los datos al backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await fetch(
                "http://localhost:3000/api/usuarios/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formulario)
                }
            );

            const datos = await respuesta.json();

            // Muestra el mensaje recibido desde el servidor
            setMensaje(datos.mensaje);

            // Limpia el formulario cuando el inicio de sesión es exitoso
            if (respuesta.ok) {
                setFormulario({
                    correo: "",
                    contraseña: ""
                });
            }

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setMensaje("No fue posible conectar con el servidor");
        }
    };

    return (
        <main className="login-container">

            <div className="login-card">

                <h1>Iniciar sesión</h1>

                <p>Ingresa tus datos para acceder</p>

                <form onSubmit={handleSubmit}>

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
                        Ingresar
                    </button>

                </form>

                {mensaje && (
                    <p className="login-mensaje">
                        {mensaje}
                    </p>
                )}

            </div>

        </main>
    );
}

export default Login;