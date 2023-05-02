const { Router } =require( 'express');
const router = Router();
const { obtenerRutinas, crearRutina }= require ('../controladores/rutinaControlador');

// Ruta para obtener todas las rutinas
router.get('/', obtenerRutinas);

// Ruta para crear una nueva rutina
router.post('/', crearRutina);

module.exports= router

