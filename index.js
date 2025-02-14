const express = require("express");
const { pool } = require("./db.js"); // Importa la conexión a la BD
const dotenv = require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para manejar JSON en las peticiones

// Ruta para probar la conexión a la BD
app.get("/api/status", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "Conectado a la BD", time: result.rows[0] });
  } catch (error) {
    console.error("Error al conectar con la BD:", error);
    res.status(500).json({ error: "Error en la conexión a la BD" });
  }
});

// Ruta para listar usuarios desde la BD
app.get("/api/usuarios", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
