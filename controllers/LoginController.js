//importamos el Modelo
import userModel from "../models/UserModel.js";
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";
//libreiaJWT
import jwt from "jsonwebtoken";
import { desencriptador } from "../functions/bcrypt.js";


//** Métodos para el CRUD */


//Login
export const login = async (req, res) => {
    try {
       const loginuser = await db.query('SELECT `id`, `nombre`, `correo`,`rol`,`estado` FROM Usuarios WHERE correo = ?',
       {
         replacements: [req.body.correo],
         type: QueryTypes.SELECT
       }
       )

       const pass = await db.query('SELECT `contrasenia` FROM Usuarios WHERE correo = ?',
       {
         replacements: [req.body.correo],
         type: QueryTypes.SELECT
       }
       )

       const Empresas = await db.query('SELECT `Afiliadas`.idAfiliada, nombre FROM `Afiliadas` INNER JOIN `Usuarios-Afliadas` ON `Afiliadas`.idAfiliada=`Usuarios-Afliadas`.`idAfiliada` WHERE `idUsuario`=?;',
       {
         replacements: [loginuser[0].id],
         type: QueryTypes.SELECT
       }
       )
        const passCrypt = pass[0].contrasenia
        const passNoCrypt = req.body.contrasenia
        const validacion = await desencriptador(passNoCrypt,passCrypt)

        if(validacion === true){
        var loginUserJSON =JSON.stringify([loginuser[0],Empresas.length]);

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
        const numEmpresas = await db.query('SELECT `Afiliadas`.idAfiliada,nombre,RUC FROM `Afiliadas` INNER JOIN `Usuarios-Afliadas` ON `Afiliadas`.idAfiliada=`Usuarios-Afliadas`.`idAfiliada` WHERE `idUsuario`=?;',
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