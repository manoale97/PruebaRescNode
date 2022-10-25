import jwt from "jsonwebtoken";

export const validacionToken =  async (req, res) => {
        const token = req.body.token
        jwt.verify(token, 'seguridadRESC',(err, user) => {

            if(err){
                res.status(403).json({msg: 'No autorizado'})
            }else{
                res.status(200).json({msg: 'Exito', user})
            }
        })
}