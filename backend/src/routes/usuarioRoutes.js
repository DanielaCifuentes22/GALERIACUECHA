// Importa Express para crear las rutas
const express = require("express");

// Importa la conexión con la base de datos
const pool = require("../db");

// Crea un router para las rutas de usuarios
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post("/registro", async (req, res) => {
    try {
        // Obtiene los datos enviados desde la solicitud
        const {
            nombres,
            apellidos,
            documento,
            direccion,
            telefono,
            correo,
            contraseña
        } = req.body;

        // Verifica que los campos obligatorios hayan sido enviados
        if (!nombres || !apellidos || !documento || !correo || !contraseña) {
            return res.status(400).json({
                mensaje: "Los campos obligatorios deben estar completos"
            });
        }

        // Consulta si el documento ya está registrado
        const [documentoExistente] = await pool.query(
            "SELECT id FROM cliente WHERE documento = ?",
            [documento]
        );

        if (documentoExistente.length > 0) {
            return res.status(409).json({
                mensaje: "El documento ya está registrado"
            });
        }

        // Consulta si el correo ya está registrado
        const [correoExistente] = await pool.query(
            "SELECT id FROM cliente WHERE correo = ?",
            [correo]
        );

        if (correoExistente.length > 0) {
            return res.status(409).json({
                mensaje: "El correo ya está registrado"
            });
        }

        // Inserta el nuevo usuario en la base de datos
        const [resultado] = await pool.query(
            `INSERT INTO cliente 
            (nombres, apellidos, documento, direccion, telefono, correo, contraseña)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                nombres,
                apellidos,
                documento,
                direccion,
                telefono,
                correo,
                contraseña
            ]
        );

        // Envía una respuesta indicando que el registro fue exitoso
        res.status(201).json({
            mensaje: "Usuario registrado correctamente",
            id: resultado.insertId
        });

    } catch (error) {
        // Muestra el error en la terminal
        console.error("Error al registrar usuario:", error);

        // Envía una respuesta de error al cliente
        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
});

// Exporta las rutas de usuarios
module.exports = router;