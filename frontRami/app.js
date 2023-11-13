const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios'); // Para realizar solicitudes HTTP al backend

const app = express();
const port = 3000; // Asegúrate de que este puerto sea diferente al del backend

// Configuración de EJS
app.set('views', path.join(__dirname, 'views')); // Define el directorio de las vistas
app.set('view engine', 'ejs'); // Establece EJS como motor de plantillas

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta GET para mostrar el formulario
app.get('/', (req, res) => {
    res.render('formulario'); // Renderiza una vista llamada 'formulario.ejs'
});

// Ruta POST para enviar datos al servicio backend
app.post('/insertar', async (req, res) => {
    try {
        const { apellidos, nombres, dni } = req.body;
        await axios.post('http://restApp:8080/insertar_con_rest', {
            apellidos, nombres, dni
        });
        res.send('Persona insertada con éxito');
    } catch (error) {
        console.error('Error al insertar la persona:', error);
        res.send('Error al insertar la persona');
    }
});

app.listen(port, () => {
    console.log(`Frontend corriendo en http://localhost:${port}`);
});
