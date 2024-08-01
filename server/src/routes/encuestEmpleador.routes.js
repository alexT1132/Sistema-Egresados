import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import { getEncuestEmpleadores, createEncuestEmpleador, getEncuestEmpleador, deleteEncuestEmpleador, updateEncuestEmpleador } from "../controllers/encuestEmpleador.controller.js";

const router = Router();

router.get('/encuesta_empleadores', authREquired, getEncuestEmpleadores);

router.post('/encuesta_empleadores', authREquired, createEncuestEmpleador);

router.get('/encuesta_empleadores/:id', authREquired, getEncuestEmpleador);

router.put('/encuesta_empleadores/:id', authREquired, updateEncuestEmpleador);

router.delete('/encuesta_empleadores/:id', authREquired, deleteEncuestEmpleador);

export default router