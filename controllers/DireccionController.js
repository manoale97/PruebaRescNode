//Importaciones
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";

//Controlador de Afiliadas
export const controllerDireccion = async (req, res) => {
    var opcion = req.body.opcion;

    switch(opcion) {
        // Mostrar todos los campos
        case 0:
            try {
                const Paises = await db.query('SELECT `idPais`,`nombre` FROM Paises',
               {
                 type: QueryTypes.SELECT
               }
              )
              res.json({Paises})
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

        //Mostrar un campo
        case 1:
            try {
                const Provincias = await db.query('SELECT `idProvincia`,`nombre` FROM `Provincias` WHERE `idPais`=?;',
               {
                replacements: [req.body.idPais], 
                type: QueryTypes.SELECT
               }
              )
              res.json({Provincias})
             } catch (error) {
                 res.json( {message: error.message} )
             }
            
        break;
        
        //Crear un nuevo campo
        case 2:
            try {
                const Ciudades = await db.query('SELECT `idCiudad`,`nombre` FROM `Ciudades` WHERE `idProvincia`=?;',
               {
                replacements: [req.body.idProvincia], 
                type: QueryTypes.SELECT
               }
              )
              res.json({Ciudades})
             } catch (error) {
                 res.json( {message: error.message} )
             }
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
