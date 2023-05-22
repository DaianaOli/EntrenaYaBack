const {Rutina, Ejercicio, Usuario} = require('../database')

// Obtener todas las rutinas
async function obtenerRutinas(req, res) {
  try {
    const rutinas = await Rutina.findAll({
      include: [
        { model: Ejercicio },
        { model: Usuario, attributes: ['id', 'nombre', 'apellido'] },
      ],
    });
    res.status(200).json(rutinas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las rutinas.' });
  }
}

// Crear una nueva rutina
async function crearRutina(req, res) {
  const { nombre, descripcion, usuarioId, ejercicios, tiempo } = req.body;
  const ejerciciosIds = ejercicios.map(ejercicio => ejercicio.id);
  try {
    const nuevaRutina = await Rutina.create({  nombre, descripcion, tiempo, UsuarioId: usuarioId });
    await nuevaRutina.addEjercicios(ejerciciosIds);
    res.status(201).json(nuevaRutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la rutina.' });
  }
}

// Borrar rutina
async function borrarRutina(req, res) {
  const { id } = req.params;
  try {
    const rutina = await Rutina.findByPk(id);
    if (!rutina) {
      return res.status(404).json({ message: 'La rutina no existe.' });
    }
    await rutina.destroy();
    res.status(200).json({ message: 'La rutina fue eliminada.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la rutina.' });
  }
}



module.exports = {
  obtenerRutinas,
  crearRutina,
  borrarRutina,
}
