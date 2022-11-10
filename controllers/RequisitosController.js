//Importaciones
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";

//Controlador de Requisitos
export const controllerRequisitos = async (req, res) => {
    var opcion = req.body.opcion;

    switch(opcion) {
        // Mostrar todos los requisitos
        case 0:
            try {
                const Requisitos = await db.query('SELECT * FROM `Requisitos`',
               {
                 type: QueryTypes.SELECT
               }
              )
              res.json( Requisitos)
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

            
    }
}