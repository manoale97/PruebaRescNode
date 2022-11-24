//Importaciones
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";

//Controlador de Afiliadas
export const controllerDireccion = async (req, res) => {
    var opcion = req.body.opcion;

    switch(opcion) {
        
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

        
        case 3:
            try {
                const pais = await db.query('SELECT `idPais`,`nombre` FROM Paises WHERE idPais=?',
               {
                replacements: [req.body.idPais], 
                type: QueryTypes.SELECT
               }
              )
              res.json({pais})
             } catch (error) {
                 res.json( {message: error.message} )
             }

        break;

        
        case 4:
            try {
                const provincia = await db.query('SELECT `idProvincia`,`nombre` FROM `Provincias` WHERE `idProvincia`=?;',
               {
                replacements: [req.body.idProvincia], 
                type: QueryTypes.SELECT
               }
              )
              res.json({provincia})
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

        case 5:
            try {
                const ciudad = await db.query('SELECT `idCiudad`,`nombre` FROM `Ciudades` WHERE `idCiudad`=?;',
               {
                replacements: [req.body.idCiudad], 
                type: QueryTypes.SELECT
               }
              )
              res.json({ciudad})
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;
    }

}
