import {Router} from "express"
import {ping} from '../controllers/conexion.controller.js'



const router=Router()


router.get('/ping',ping)

export default router