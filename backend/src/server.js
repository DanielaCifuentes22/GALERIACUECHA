// Importa Express para crear el servidor
const express = require("express");

// Importa CORS para permitir solicitudes desde el frontend
const cors = require("cors");

// Importa las rutas relacionadas con los usuarios
const usuarioRoutes = require("./routes/usuarioRoutes");

// Crea una instancia de Express
const app = express();

// Permite que el servidor reciba datos en formato JSON
app.use(express.json());

// Permite la comunicación entre el frontend y el backend
app.use(cors());

// Utiliza las rutas de usuarios
app.use("/api/usuarios", usuarioRoutes);

// Ruta de prueba para verificar que el servidor está funcionando
app.get("/", (req, res) => {
    res.json({
        mensaje: "API Galería Cuecha funcionando correctamente"
    });
});

// Define el puerto en el que funcionará el servidor
const PORT = 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});