//importamos archivo de conexion que utilizaremos
const { DataTypes } = require("sequelize");
const sequelize = require("../bd/database");

const AsignaturaEstudiante = sequelize(
  "AsignaturaEstudiante",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idestudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idasignatura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "asignaturaestudiante",
    timesTamps: false
  }
);

module.exports= AsignaturaEstudiante;
