//Importaciones
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";

//Controlador de Emisores
export const controllerEmisor = async (req, res) => {
    var opcion = req.body.opcion;

    switch(opcion) {
        // Mostrar todos los campos
        case 0:
            try {
                const Emisores = await db.query('SELECT `codigo`,`nombre`, `estado`, `independiente` FROM Emisores WHERE `estado`=1 || `estado`=0' ,
               {
                 type: QueryTypes.SELECT
               }
              )
              res.json( Emisores)
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

        //mostrar un solo campo
        case 1:

        break;

        // crear un emisor
        case 2:
            try {
                await db.query('INSERT INTO `Emisores` (`codigo`, `nombre`, `estado`, `independiente`) VALUES (?, ?, ?, ?)' ,
               {
                 type: QueryTypes.INSERT,
                 replacements: [
                    req.body.codigo,
                    req.body.nombre,
                    req.body.estado,
                    req.body.independiente,
                ],
               }
              )
              res.json( 'Emisor creado exitosamente')
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

        //actualizar un emisor
        case 3:
            try {
                await db.query('UPDATE `Emisores` SET `codigo`=?,`nombre`=?,`estado`=?,`independiente`=? WHERE `codigo`=?' ,
               {
                 type: QueryTypes.UPDATE,
                 replacements: [
                    req.body.codigonuevo,
                    req.body.nombre,
                    req.body.estado,
                    req.body.independiente,
                    req.body.codigofijo,
                ],
               }
              )
              res.json( 'Emisor eliminado exitosamente')
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

        //eliminar un emisor
        case 4:
            try {
                await db.query('UPDATE `Emisores` SET `estado`=2 WHERE `codigo`=?' ,
               {
                 type: QueryTypes.UPDATE,
                 replacements: [
                    req.body.codigo,
                ],
               }
              )
              res.json( 'Emisor eliminado exitosamente')
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;
    }

}
