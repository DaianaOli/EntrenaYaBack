const { Sequelize } = require ('sequelize');
require('dotenv').config();

// Obtenemos las credenciales de la base de datos desde las variables de entorno
const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

// Creamos una nueva instancia de Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  port: DB_PORT,
});


// Definimos los modelos
const Ejercicio = require('./modelos/ejercicio')(sequelize, Sequelize);
const Rutina = require('./modelos/rutina')(sequelize, Sequelize);
const Usuario = require('./modelos/usuario')(sequelize, Sequelize);

// Asociamos las relaciones entre modelos
Usuario.hasMany(Rutina);
Rutina.belongsTo(Usuario);
Rutina.belongsToMany(Ejercicio, { through: 'Rutina_Ejercicio' });
Ejercicio.belongsToMany(Rutina, { through: 'Rutina_Ejercicio' });

// Exportamos los modelos y la instancia de Sequelize
module.exports={
    sequelize,
    Ejercicio,
    Rutina,
    Usuario,
}
