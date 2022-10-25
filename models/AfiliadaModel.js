//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const AfiliadaModel = db.define('Afiliadas', {
     nombre: { type: DataTypes.TEXT },
     nombre_comercial: { type: DataTypes.TEXT },
     RUC: { type: DataTypes.TEXT },
     idPais: { type: DataTypes.INTEGER },
     idProvincia: { type: DataTypes.INTEGER },
     idCanton: { type: DataTypes.INTEGER },
     idParroquia: { type: DataTypes.INTEGER },
     direccion:  { type: DataTypes.TEXT },
     telefono1: { type: DataTypes.TEXT },
     telefono2: { type: DataTypes.TEXT },
     celular1: { type: DataTypes.TEXT },
     email1: { type: DataTypes.TEXT },
     email2: { type: DataTypes.TEXT },
     representante: { type: DataTypes.TEXT },
     ciRepresentante: { type: DataTypes.TEXT },
     fechaCreacion: { type: DataTypes.DATE },
     contribuyenteEspecial: { type: DataTypes.INTEGER },
     codigoContribuyente: { type: DataTypes.TEXT },
     microempresa: { type: DataTypes.INTEGER },
     notamicroempresa: { type: DataTypes.TEXT },
     rimpe: { type: DataTypes.INTEGER },
     notaRimpe: { type: DataTypes.TEXT },
     agenteRetencion: { type: DataTypes.INTEGER },
     nResolucion: { type: DataTypes.TEXT },
     obligadaCont: { type: DataTypes.INTEGER },
     tipoFirma: { type: DataTypes.TEXT },
     Imagen: { type: DataTypes.TEXT },
 })

 export default AfiliadaModel