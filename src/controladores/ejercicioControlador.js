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

// Actualizar ejercicio
async function actualizarEjercicio(req, res) {
  const { id } = req.params;
  const { nombre, descripcion, video, minutos, sets, repeticiones } = req.body;
  try {
    const ejercicio = await Ejercicio.findByPk(id);
    if (!ejercicio) {
      return res.status(404).json({ message: 'El ejercicio no existe.' });
    }
    ejercicio.nombre = nombre;
    ejercicio.descripcion = descripcion;
    ejercicio.video = video;
    ejercicio.minutos = minutos;
    ejercicio.sets = sets;
    ejercicio.repeticiones = repeticiones;
    await ejercicio.save();
    res.status(200).json(ejercicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el ejercicio.' });
  }
}
// Eliminar ejercicio
async function borrarEjercicio(req, res) {
  const { id } = req.params;
  try {
    const ejercicio = await Ejercicio.findByPk(id);
    if (!ejercicio) {
      return res.status(404).json({ message: 'El ejercicio no existe.' });
    }
    await ejercicio.destroy();
    res.status(200).json({ message: 'El ejercicio fue eliminado.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el ejercicio.' });
  }
}


module.exports={
    obtenerEjercicios,
    crearEjercicios,
    actualizarEjercicio,
    borrarEjercicio,
}
