const express = require('express');
const router = express.Router();
const {obtenerUsuarios, crearUsuario, iniciarSesion, obtenerUsuario, agregarDatosUsuario, actualizarDatosUsuario} = require ('../controladores/usuarioControlador')

// Ruta para obtener todos los usuarios
router.get('/', obtenerUsuarios);
// Ruta para obtener los detalles de un usuario segun ID
router.get('/:id', obtenerUsuario)
// Ruta para crear un nuevo usuario
router.post('/', crearUsuario );
//Ruta para agregar mas datos del usuario
// router.post('/:id', agregarDatosUsuario);
//Ruta para actualizar datos de un usuario
// router.put('/:id', actualizarDatosUsuario);
// Ruta para iniciar sesion
router.post('/login', iniciarSesion);


module.exports = router;
