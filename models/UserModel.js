//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const UserModel = db.define('Usuarios', {
     nombre: { type: DataTypes.CHAR },
     correo: { type: DataTypes.CHAR },
     contrasenia: { type: DataTypes.CHAR },
     estado: { type: DataTypes.INTEGER },
 })

 export default UserModel
