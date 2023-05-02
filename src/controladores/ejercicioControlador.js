const {Ejercicio} = require ('../database')

// Obtener todos los ejercicios
async function obtenerEjercicios(req, res) {
  try {
    const ejercicios = await Ejercicio.findAll();
    res.status(200).json(ejercicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
}

// Crear un nuevo ejercicio
async function crearEjercicios(req, res) {
  const { nombre, descripcion, video, minutos,id , sets, repeticiones } = req.body;
  try {
    const nuevoEjercicio = await Ejercicio.create({id, nombre, descripcion, video, minutos, sets, repeticiones});
    res.status(201).json(nuevoEjercicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el ejercicio.' });
  }
}

module.exports={
    obtenerEjercicios,
    crearEjercicios,
}
