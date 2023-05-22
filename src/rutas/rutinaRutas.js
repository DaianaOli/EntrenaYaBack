const { Router } =require( 'express');
const router = Router();
const { borrarRutina,obtenerRutinas, crearRutina }= require ('../controladores/rutinaControlador');

// Ruta para obtener todas las rutinas
router.get('/', obtenerRutinas);

// Ruta para crear una nueva rutina
router.post('/', crearRutina);

// Ruta para borrar una rutina
router.delete('/:id', borrarRutina);                    

module.exports= router

