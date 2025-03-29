// backend/server.js
const express = require('express');
const cors = require('cors');
const noticiasRoutes = require('./routes/noticias');
const jogosRoutes = require('./routes/jogos');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/noticias', noticiasRoutes);
app.use('/api/jogos', jogosRoutes);
app.use('/api/auth', authRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});