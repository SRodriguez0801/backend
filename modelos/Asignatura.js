//importamos archivo de conexion que utilizaremos
const { DataTypes } = require("sequelize");
const sequelize = require("../bd/database");

const Asignatura = sequelize(
  "Asignatura",
  {
    idasignatura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "asignatura",
    timesTamps: false,  }
);

module.exports= Asignatura;
