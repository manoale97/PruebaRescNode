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
                const Afiliadas = await db.query('SELECT `idAfiliada`,`nombre`, `RUC`, `direccion`, `telefono1`, `celular1`, `estado` FROM Afiliadas WHERE `estado`<2' ,
               {
                 type: QueryTypes.SELECT
               }
              )
              res.json( Afiliadas)
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

        //Mostrar un solo campo
        case 1:
            try {
                const Afiliada = await db.query('SELECT * FROM Afiliadas WHERE idAfiliada = ?',
               {
                 replacements: [req.body.idAfiliada,],
                 type: QueryTypes.SELECT
               }
              )
              
              res.json([Afiliada])
             } catch (error) {
                 res.json( {message: error.message} )
             }
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
              res.json( {"message":"Afiliada creada exitosamente"})
             } catch (error) {
                 res.json( {message: error.message} )
             }

        break;

        //Actualizar un campo
        case 3:
            try {
                await db.query('UPDATE `Afiliadas` SET `nombre`=?,`nombre_comercial`=?,`RUC`=?,`idPais`=?,`idProvincia`=?,`idCiudad`=?,`direccion`=?,`telefono1`=?,`telefono2`=?,`celular1`=?,`email1`=?,`email2`=?,`representante`=?,`ciRepresentante`=?,`fechaCreacion`=?,`contribuyenteEspecial`=?,`codigoContribuyente`=?,`microempresa`=?,`notamicroempresa`=?,`rimpe`=?,`notaRimpe`=?,`agenteRetencion`=?,`nResolucion`=?,`obligadaCont`=?,`tipoFirma`=?,`Imagen`=?,`estado`=? WHERE `Afiliadas`.`idAfiliada` = ?;',
                   {
                    replacements: [
                        req.body.nombre, 
                        req.body.nombre_comercial, 
                        req.body.ruc,
                        req.body.idPais, 
                        req.body.idProvincia,  
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
                        req.body.estado,
                        req.body.idAfiliada
                        ],
                     type: QueryTypes.UPDATE
                   }
                  )
                  res.json( {"message":"Afiliada editada exitosamente"})
                 } catch (error) {
                     res.json( {message: error.message} )
                 }

        break;

        //Borrar un campo
        case 4:
            try {
                await db.query('UPDATE `Afiliadas` SET `estado`=? WHERE `Afiliadas`.`idAfiliada` = ?;',
                   {
                    replacements: [
                        req.body.estado,
                        req.body.idAfiliada
                    ],
                     type: QueryTypes.UPDATE
                   }
                  )
                  res.json( {"message":"Afiliada borrada exitosamente"})
                
            } catch (error) {
                res.json( {message: error.message} )
            }
        break;

        //Obtener el id una afiliada
        case 5:
            try {
                const idAfiliada = await db.query('SELECT `idAfiliada` FROM Afiliadas WHERE RUC = ?;',
               {
                replacements: [
                    req.body.ruc, 
                ],
                 type: QueryTypes.SELECT
               }
              )
              res.json(idAfiliada[0])
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

        //insertar en la lista ContactosAfiliadas
        case 6:
          try {
            await db.query('INSERT INTO `ContactosAfiliadas` (`idAfiliada`, `cargo`, `nombre`, `telefono`, `celular`, `email`) VALUES (?, ?, ?, ?, ?, ?);',
            {
                replacements: [
                    req.body.idAfiliada, 
                    req.body.cargo, 
                    req.body.nombre,
                    req.body.telefono, 
                    req.body.celular,  
                    req.body.email,
                    ],
                 type: QueryTypes.INSERT
               }
              )
              res.json( {"message":"Contacto creado exitosamente"})
             } catch (error) {
                 res.json( {message: error.message} )
             }
        break;

        //insertar en la lista intermedia afiliada-requisitos
        case 7:
            try {
                await db.query('INSERT INTO `Afiliadas-Requisitos` (`idAfiliadas`, `idRequisito`, `entregado`, `archivo`) VALUES (?, ?, ?, ?);',
                {
                    replacements: [
                        req.body.idAfiliada, 
                        req.body.idRequisito, 
                        req.body.entregado,
                        req.body.archivo
                        ],
                     type: QueryTypes.INSERT
                   }
                  )
                  res.json( {"message":"Requisito exitosamente"})
            } catch (error) {
                res.json( {message: error.message} )
            }

        break;
        
        // mostrar todos los contactos
        case 8:

            try {
                const Contactos = await db.query('SELECT * FROM ContactosAfiliadas WHERE idAfiliada = ?',
                {
                    replacements: [req.body.idAfiliada,],
                    type: QueryTypes.SELECT
                }
                )
                res.json(Contactos)
            } catch (error) {
                res.json( {message: error.message} )
            }

        break;
        
        //mostrar los requisitos
        case 9:

            try {
                const Requisitos = await db.query('SELECT `id`,`Requisitos`.`idRequisito`,`nombre`,`descripcion`,`entregado` FROM `Afiliadas-Requisitos` INNER JOIN `Requisitos` ON `Afiliadas-Requisitos`.idRequisito=`Requisitos`.idRequisito WHERE idAfiliadas = ?',
            {
              replacements: [req.body.idAfiliada,],
              type: QueryTypes.SELECT
            }
           )
           
           res.json(Requisitos)
                
            } catch (error) {
                res.json( {message: error.message} )
            }

        break;

        //actualizar los contactos
        case 10:
        
            try {
                await db.query('UPDATE `ContactosAfiliadas` SET `cargo`= ?,`nombre` = ?, `telefono` = ?, `celular` = ?, `email` = ? WHERE `ContactosAfiliadas`.`idContacto` = ?;',
            {
              replacements: [
                req.body.cargo,
                req.body.nombre,
                req.body.telefono,
                req.body.celular,
                req.body.email,
                req.body.idContacto
            ],
              type: QueryTypes.UPDATE
            }
           )
           res.json({message: "contacto editado exitosamente"})
            } catch (error) {
                res.json( {message: error.message} )
            }

        break;

        //actualizar los requisitos
        case 11:
            
            try {
                await db.query('UPDATE `Afiliadas-Requisitos` SET `entregado` = ? WHERE `Afiliadas-Requisitos`.`id` = ?;',
            {
              replacements: [
                req.body.entregado,
                req.body.id
            ],
              type: QueryTypes.UPDATE
            }
           )
           res.json({message: "requisito editado exitosamente"})
            } catch (error) {
                res.json( {message: error.message} )
            }
        break;

        //eliminar un contacto
        case 12:

            try {
                const Requisitos = await db.query('DELETE FROM `ContactosAfiliadas` WHERE `ContactosAfiliadas`.`idContacto` = ?',
            {
              replacements: [req.body.idContacto,],
              type: QueryTypes.DELETE
            }
           )
           res.json({message: "contacto eliminado exitosamente"})  
            } catch (error) {
                res.json( {message: error.message} )
            }

        break;

        //eliminar un requisito
        case 13:
            try {
                const Requisitos = await db.query('DELETE FROM `Afiliadas-Requisitos` WHERE `Afiliadas-Requisitos`.`id` = ?',
            {
              replacements: [req.body.id,],
              type: QueryTypes.DELETE
            }
           )
           res.json({message: "requisito eliminado exitosamente"})  
            } catch (error) {
                res.json( {message: error.message} )
            }
        break;
    }

}
