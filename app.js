const express = require('express');
const bodyParser = require('body-parser');
const rutaUsuario = require('./src/rutas/usuarioRutas');
const rutaEjercicio = require('./src/rutas/ejercicioRutas');
const rutaRutina = require('./src/rutas/rutinaRutas');
const {sequelize} = require('./src/database');
const cors = require('cors');
const app = express();

// Configuramos body-parser para que convierta el cuerpo de las solicitudes a JSON
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' }));
// Configuramos las rutas de la aplicación
app.use('/usuarios', rutaUsuario);
app.use('/ejercicios', rutaEjercicio);
app.use('/rutinas', rutaRutina);

// Manejador de errores genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salio mal, esto podría tardar...');
});

// Conectamos a la base de datos y arrancamos el servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log('Servidor andando...');
  });
});
