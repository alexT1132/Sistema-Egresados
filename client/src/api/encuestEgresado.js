import axios from "./axios.js";

export const getsEncuestEgresadosRequest = () => axios.get('/encuesta_egresados');

export const getEncuestEgresadoRequest = (id) => axios.get(`/encuesta_egresados/${id}`);

export const createEncuestEgresadoRequest = (encuestEgresado) => axios.post('/encuesta_egresados', encuestEgresado);

export const updateEncuestEgresadoRequest = (id, encuestEgresado) => axios.put(`/encuesta_egresados/${id}`, encuestEgresado);

export const deleteEncuestEgresadoRequest = (id) => axios.delete(`/encuesta_egresados/${id}`);