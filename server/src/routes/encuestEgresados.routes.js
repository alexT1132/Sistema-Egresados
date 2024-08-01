import { Router } from "express";
import { authREquired } from "../middlewares/validateToken.js";
import { getEncuestEgresados, createEncuestEgresado, getEncuestEgresado, deleteEncuestEgresado, updateEncuestEgresado } from "../controllers/encuestEgresado.controller.js";

const router = Router();

router.get('/encuesta_egresados', authREquired, getEncuestEgresados);

router.post('/encuesta_egresados', authREquired, createEncuestEgresado);

router.get('/encuesta_egresados/:id', authREquired, getEncuestEgresado);

router.put('/encuesta_egresados/:id', authREquired, updateEncuestEgresado);

router.delete('/encuesta_egresados/:id', authREquired, deleteEncuestEgresado);

export default router