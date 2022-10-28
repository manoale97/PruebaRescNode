import express from 'express'
import { login, nEmpresas} from '../controllers/UserController.js'
import { validacionToken } from '../controllers/AuthController.js'
import { controllerAfiliada } from '../controllers/AfiliadaController.js'
import { controllerDireccion } from '../controllers/DireccionController.js'
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

export default router
