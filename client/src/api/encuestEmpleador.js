import axios from "./axios.js";

export const getsEncuestEmpleadoresRequest = () => axios.get('/encuesta_empleadores');

export const getEncuestEmpleadorRequest = (id) => axios.get(`/encuesta_empleadores/${id}`);

export const createEncuestEmpleadorRequest = (encuestEmpleador) => axios.post('/encuesta_empleadores', encuestEmpleador);

export const updateEncuestEmpleadorRequest = (id, encuestEmpleador) => axios.put(`/encuesta_empleadores/${id}`, encuestEmpleador);

export const deleteEncuestEmpleadorRequest = (id) => axios.delete(`/encuesta_empleadores/${id}`);