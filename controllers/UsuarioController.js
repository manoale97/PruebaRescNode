//Importaciones
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";
import { createPassword } from "../functions/generadorPassword.js";
import { encriptador } from "../functions/bcrypt.js";
import nodemailer from 'nodemailer';

//Controlador de Usuarios
export const controllerUsuario = async (req, res) => {
    var opcion = req.body.opcion;

    switch(opcion) {
        // Mostrar todos los campos
        case 0:
          try {
            const Usuarios=await db.query('SELECT `id`,`nombre`,`apellido`,`correo`,`estado`,`rol` FROM `Usuarios` WHERE `estado`<2;',
            {
              type: QueryTypes.SELECT
            }
          )
          res.json(Usuarios)
            
          } catch (error) {
            res.json( {message: error.message} )
          }
            break;
        // Mostrar un solo campo
        case 1:
          try {
            const Usuarios=await db.query('SELECT `id`,`nombre`,`apellido`,`correo`,`estado`,`rol` FROM `Usuarios` WHERE `id`=?;',
            {
              replacements: [
                req.body.id
                ],
              type: QueryTypes.SELECT
            }
          )
          res.json(Usuarios)
            
          } catch (error) {
            res.json( {message: error.message} )
          }
        break;
        // Crear un nuevo campo
        case 2:
            try {
                let transporter = nodemailer.createTransport({
                    host: "smtp.hostinger.com",
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                      user: 'notificaciones@rescobranzas.com', // generated ethereal user
                      pass: 'Rescobranzas.2022', // generated ethereal password
                    },
                  });
                const contraseniaAleatoria=createPassword(12, true, true);
                let mensaje = 'Bienvenido al sistema web de Rescobranzas.\n\n\nSe ha generado una contraseña para su ingreso al sistema.\nLa contraseña es:'+' '+contraseniaAleatoria+'\n\n\nEste mensaje se generó de manera automática y no debe ser contestado.'
                await transporter.sendMail({
                    from: 'notificaciones@rescobranzas.com', // sender address
                    to: req.body.correo, // list of receivers
                    subject: "Creación de usuario", // Subject line
                    text: mensaje, // plain text body
                  });
                const contraseniaEncriptada=await encriptador(contraseniaAleatoria);
                await db.query('INSERT INTO `Usuarios` (`nombre`, `apellido`, `correo`,`contrasenia`,`rol`) VALUES (?, ?, ?, ?, ?);',
                   {
                    replacements: [
                        req.body.nombre, 
                        req.body.apellido, 
                        req.body.correo,
                        contraseniaEncriptada,
                        req.body.rol
                        ],
                     type: QueryTypes.INSERT
                   }
                  )
                const id=await db.query('SELECT `ìd` FROM `Usuarios` WHERE `correo`=?;',
                  {
                  replacements: [
                      req.body.correo
                      ],
                    type: QueryTypes.SELECT
                  }
                )
                  res.json(id)
                 } catch (error) {
                     res.json( {message: error.message} )
                 }
        break;

        //validar correo repetido
        case 3:
          try{
          const respuestaCorreo=await db.query('SELECT * FROM `Usuarios` WHERE `correo`=?;',
            {
            replacements: [
                req.body.correo
                ],
              type: QueryTypes.SELECT
            }
          )
          res.json(respuestaCorreo)
          } catch (error) {
              res.json( {message: error.message} )
          }
        break;

        //insertar usuario en usuario-afiliada
        case 4:
          try {
            await db.query('INSERT INTO `Usuarios-Afliadas` (`idAfiliadas`, `idUsuarios`) VALUES (?, ?);',
                   {
                    replacements: [
                        req.body.idEmpresa,
                        req.body.idUsuario
                        ],
                     type: QueryTypes.INSERT
                   }
                  )
                  res.json( {message: 'Usuario agregado en la afiliada'} )
          } catch (error) {
            res.json( {message: error.message} )
          }
        break;

        //editar usuario
        case 5:
        try {
          await db.query('UPDATE `Usuarios` set `nombre`=?,`apellido`=?,`correo`=?,`rol`=?,`estado`=? WHERE `id`=?;',
              {
              replacements: [
                  req.body.nombre,
                  req.body.apellido,
                  req.body.correo,
                  req.body.rol,
                  req.body.estado,
                  req.body.id,
                  ],
                type: QueryTypes.UPDATE
              }
            )
            res.json( {message: 'Usuario editado exitosamente'} )
        } catch (error) {
          res.json( {message: error.message} )
        }
        break;

        //eliminar Usuarios
        case 6:
          try {
            await db.query('UPDATE `Usuarios` set `estado`=? WHERE `id`=?;',
                {
                replacements: [
                    req.body.estado,
                    req.body.id,
                    ],
                  type: QueryTypes.UPDATE
                }
              )
              res.json( {message: 'Usuario eliminado exitosamente'} )
          } catch (error) {
            res.json( {message: error.message} )
          }
          break;
        break;
    }
}
    