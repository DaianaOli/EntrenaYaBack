const {Rutina, Ejercicio, Usuario} = require('../database')

// Obtener todas las rutinas
async function obtenerRutinas(req, res) {
  try {
    const rutinas = await Rutina.findAll({
      include: [
        { model: Ejercicio, attributes: ['id', 'nombre', 'video'] },
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


module.exports = {
  obtenerRutinas,
  crearRutina,
}
