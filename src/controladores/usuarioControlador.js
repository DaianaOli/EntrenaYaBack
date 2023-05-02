const {Usuario} = require('../database')
const {hash} = require('bcrypt')
const { compare } = require('bcrypt');
const jwt = require('jsonwebtoken');


// Obtener todos los usuarios
async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los usuarios.' });
  }
}

// Obtener los detalles del usuario segun ID
async function obtenerUsuario(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'El usuario no existe.' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario.' });
  }
}

// Crear un nuevo usuario
async function crearUsuario(req, res) {
  const { nombre, apellido, email, contraseña } = req.body;
  try {
    const hashedContraseña = await hash(contraseña, 10);
    const nuevoUsuario = await Usuario.create({ nombre, apellido, email, contraseña: hashedContraseña });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario.' });
  }
}

//Iniciar sesion
async function iniciarSesion(req, res) {
  const { email, contraseña } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ message: 'El usuario no existe.' });
    }
    const contraseñaValida = await compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }
    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión.' });
  }
}

// Agregar mas datos del usuario
async function agregarDatosUsuario(req, res) {
  const { id } = req.params;
  const {altura, peso, sexo} = req.body
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'El usuario no existe.' });
    }
    const datosUsuario = await Usuario.update({altura, peso, sexo}, {where: {id}})
    res.status(200).json(datosUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al agregar los datos del usuario.' });
  }
}

// Actualizar datos de un usuario
async function actualizarDatosUsuario(req, res) {
  const { id } = req.params;
  const {nombre, apellido, email, contraseña, altura, peso, sexo} = req.body
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'El usuario no existe.' });
    }
    const datosUsuario = await Usuario.update({nombre, apellido, email, contraseña, altura, peso, sexo}, {where: {id}})
    res.status(200).json(datosUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar los datos del usuario.' });
  }
}

module.exports = {
    obtenerUsuarios,
    crearUsuario,
    iniciarSesion,
    obtenerUsuario,
    agregarDatosUsuario,
    actualizarDatosUsuario
};