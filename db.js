import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg; // Desestructurar Pool desde pg

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false }, // Si la BD requiere SSL
});


export { pool }; // Exportamos como objeto nombrado

