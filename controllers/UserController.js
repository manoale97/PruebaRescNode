//importamos el Modelo
import userModel from "../models/UserModel.js";
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";
//libreiaJWT
import jwt from "jsonwebtoken";


//** Métodos para el CRUD */


//Login
export const login = async (req, res) => {
    try {
       const loginuser = await db.query('SELECT `id`, `nombre`, `correo` FROM Usuarios WHERE correo = ? AND contrasenia = ? ',
       {
         replacements: [req.body.correo, req.body.contrasenia],
         type: QueryTypes.SELECT
       }
       )

       const Empresas = await db.query('SELECT idAfiliadas, nombre FROM `Afiliadas` INNER JOIN `Usuarios-Afliadas` ON `Afiliadas`.idAfiliada=`Usuarios-Afliadas`.`idAfiliadas` WHERE `idUsuarios`=?;',
       {
         replacements: [loginuser[0].id],
         type: QueryTypes.SELECT
       }
       )

        if(loginuser.length>0){
        var loginUserJSON =JSON.stringify([loginuser[0],Empresas.length]);
        console.log(loginUserJSON)

        const token = jwt.sign(loginUserJSON, 'seguridadRESC');
        res.json({token})
        }
        else{
            res.json({message: "Inicio de sesión incorrecto"})
        }
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const nEmpresas = async(req, res) => {
    try {
        const numEmpresas = await db.query('SELECT idAfiliadas,nombre FROM `Afiliadas` INNER JOIN `Usuarios-Afliadas` ON `Afiliadas`.idAfiliada=`Usuarios-Afliadas`.`idAfiliadas` WHERE `idUsuarios`=?;',
       {
         replacements: [req.body.idUsuario],
         type: QueryTypes.SELECT
       }
       )

       res.json({numEmpresas})
    } catch (error) {
        res.json( {message: error.message} )
    }
} 