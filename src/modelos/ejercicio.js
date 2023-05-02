module.exports = (sequelize, DataTypes) => {
    const Ejercicio = sequelize.define('Ejercicio', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      video:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      minutos:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sets: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      repeticiones: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    return Ejercicio;
  };
  