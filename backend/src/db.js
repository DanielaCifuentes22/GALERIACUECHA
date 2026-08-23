// Importa MySQL2 para poder conectarnos a la base de datos
const mysql = require("mysql2/promise");
// Permite utilizar las variables de configuración almacenadas en el archivo .env
require("dotenv").config();

// Crea un grupo de conexiones para trabajar con la base de datos
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});
// Exporta la conexión para poder utilizarla en otros archivos del backend
module.exports = pool;