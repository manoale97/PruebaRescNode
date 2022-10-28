//Importaciones
//querys sequelize
import db from "../database/db.js";
import { QueryTypes } from "sequelize";

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
        break;

        //Mostrar un campo
        case 1:
          // code block
            
        break;
        
        //Crear un nuevo campo
        case 2:
            try {
            await db.query('INSERT INTO `Afiliadas` (`nombre`, `nombre_comercial`, `RUC`, `idPais`, `idProvincia`, `idCiudad`, `direccion`, `telefono1`, `telefono2`, `celular1`, `email1`, `email2`, `representante`, `ciRepresentante`, `fechaCreacion`, `contribuyenteEspecial`, `codigoContribuyente`, `microempresa`, `notamicroempresa`, `rimpe`, `notaRimpe`, `agenteRetencion`, `nResolucion`, `obligadaCont`, `tipoFirma`, `Imagen`, `estado`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
               {
                replacements: [
                    req.body.nombre, 
                    req.body.nombre_comercial, 
                    req.body.ruc,
                    req.body.idPais, 
                    req.body.idProvincia, 
                    req.body.idPais, 
                    req.body.idCiudad,
                    req.body.direccion, 
                    req.body.telefono1, 
                    req.body.telefono2, 
                    req.body.celular1, 
                    req.body.email1, 
                    req.body.email2, 
                    req.body.representante,
                    req.body.ciRepresentante, 
                    req.body.fechaCreacion, 
                    req.body.contribuyenteEspecial, 
                    req.body.codigoContribuyente, 
                    req.body.microempresa, 
                    req.body.notamicroempresa, 
                    req.body.rimpe, 
                    req.body.notaRimpe, 
                    req.body.agenteRetencion, 
                    req.body.nResolucion, 
                    req.body.obligadaCont, 
                    req.body.tipoFirma, 
                    req.body.Imagen, 
                    req.body.estado
                    ],
                 type: QueryTypes.INSERT
               }
              )
              res.json( {"message":"Afiliada creada exitosamente" })
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