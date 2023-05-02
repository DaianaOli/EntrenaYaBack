const { Router } =require( 'express');
const router = Router();
const {obtenerEjercicios, crearEjercicios }= require('../controladores/ejercicioControlador')

// Ruta para obtener todos los ejercicios
router.get('/', obtenerEjercicios);

// Ruta para crear un nuevo ejercicio
router.post('/', crearEjercicios);

module.exports= router
