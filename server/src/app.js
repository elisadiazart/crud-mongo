const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const mongoose = require ('mongoose');
const bookRoutes = require('./routes/books.routes');

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(express.json());
app.use('/api/books', bookRoutes)

// Uso de rutas

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to database');
     } catch (err) {
        console.error('Connection error')
     }

    app.listen(process.env.PORT, () => console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`));
}


startServer()