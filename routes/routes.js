import express from 'express'
import { login, nEmpresas} from '../controllers/LoginController.js'
import { validacionToken } from '../controllers/AuthController.js'
import { controllerAfiliada } from '../controllers/AfiliadaController.js'
import { controllerDireccion } from '../controllers/DireccionController.js'
import { controllerRequisitos } from '../controllers/RequisitosController.js'
import { controllerUsuario } from '../controllers/UsuarioController.js'
import { controllerEmisor } from '../controllers/EmisorController.js'
const router = express.Router()

//router.get('/', getAllUsers)
/*router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog) 
*/
router.post('/login', login)
router.post('/tokvalid', validacionToken)
router.post('/afiliada', controllerAfiliada)
router.post('/nEmpresas', nEmpresas)
router.post('/paises-ciudades', controllerDireccion)
router.post('/requisitos', controllerRequisitos)
router.post('/usuario', controllerUsuario)
router.post('/emisor', controllerEmisor)

export default router
