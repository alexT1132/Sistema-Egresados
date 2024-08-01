import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import { getFormEgresados, getFormEgresado, createFormEgresado, deleteFormEgresado, updateFormEgresado } from "../controllers/formEgresado.controller.js";

const router = Router();

router.get('/form_egresados', authREquired, getFormEgresados);

router.post('/form_egresados', authREquired, createFormEgresado);

router.get('/form_egresados/:id', authREquired, getFormEgresado);

router.put('/form_egresados/:id', authREquired, updateFormEgresado);

router.delete('/form_egresados/:id', authREquired, deleteFormEgresado);

export default router