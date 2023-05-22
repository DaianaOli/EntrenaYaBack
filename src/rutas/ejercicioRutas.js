const { Router } =require( 'express');
const router = Router();
const {obtenerEjercicios, crearEjercicios, actualizarEjercicio, borrarEjercicio }= require('../controladores/ejercicioControlador')

// Ruta para obtener todos los ejercicios
router.get('/', obtenerEjercicios);

// Ruta para crear un nuevo ejercicio
router.post('/', crearEjercicios);

// Ruta para actualizar un ejercicio
router.put('/:id', actualizarEjercicio);

// Ruta para borrar un ejercicio
router.delete('/:id', borrarEjercicio);

module.exports= router
