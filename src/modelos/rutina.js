module.exports = (sequelize, DataTypes) => {
    const Rutina = sequelize.define('Rutina', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        unique: false
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      tiempo:{
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    });
    return Rutina;
  };