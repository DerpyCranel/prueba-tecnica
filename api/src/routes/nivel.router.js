import {Router} from 'express'
import { createNivel,getNiveles,deleteNiveles,updateNivel } from '../controllers/nivel.controller.js'


const router=Router()


router.post("/niveles",createNivel)

router.get("/niveles",getNiveles)

router.delete("/niveles/:id",deleteNiveles)

router.patch("/niveles/:id",updateNivel)




export default router