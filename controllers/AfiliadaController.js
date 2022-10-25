//Importaciones
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";
import AfiliadaModel from "../models/AfiliadaModel.js";

//Controlador de Afiliadas
export const controllerAfiliada = async (req, res) => {
    var opcion = req.body.opcion;

    switch(opcion) {
        // Mostrar todos los campos
        case 0:
            try {
                const Afiliadas = await db.query('SELECT `nombre`, `RUC`, `direccion`, `telefono1`, `celular1`, `estado` FROM Afiliadas',
               {
                 type: QueryTypes.SELECT
               }
              )
              res.json( Afiliadas)
             } catch (error) {
                 res.json( {message: error.message} )
             }
            /*try {
                const users = await AfiliadaModel.findAll()
                res.json(users)
            } catch (error) {
                res.json( {message: error.message} )
            }*/
        break;

        //Mostrar un campo
        case 1:
          // code block
            
        break;
        
        //Crear un nuevo campo
        case 2:
          //

        break;

        //Actualizar un campo
        case 3:
          //

        break;

        //Borrar un campo
        case 4:
          //

        break;
    }

}


//Mostrar todos los registros
export const getAfiliadas = async (req, res) => {
    try {
        const users = await userModel.findAll()
        res.json(users)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createBlog = async (req, res) => {
    try {
       await userModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
/* //Crear un registro con sql
export const crearAfiliada = async(req, res) => {
    try {
        const loginuser = await db.query('SELECT `nombre`, `correo` FROM Usuarios WHERE correo = ? AND contrasenia = ? ',
       {
         replacements: [req.body.correo, req.body.contrasenia],
         type: QueryTypes.SELECT
       }
      )
     } catch (error) {
         res.json( {message: error.message} )
     }
}*/