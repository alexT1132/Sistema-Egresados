import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import { getFormEmpleadores, createFormEmpleadores, getFormEmpleador, deleteFormEmpleador, updateFormEmpleador } from "../controllers/formEmpleador.controller.js";

const router = Router();

router.get('/form_empleador', authREquired, getFormEmpleadores);

router.post('/form_empleador', authREquired, createFormEmpleadores);

router.get('/form_empleador/:id', authREquired, getFormEmpleador);

router.put('/form_empleador/:id', authREquired, updateFormEmpleador);

router.delete('/form_empleador/:id', authREquired, deleteFormEmpleador);

export default router