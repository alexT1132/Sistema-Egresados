import axios from "./axios.js";

export const getsFormEgresadosRequest = () => axios.get('/form_egresados');

export const getFormEgresadoRequest = (id) => axios.get(`/form_egresados/${id}`);

export const createFormEgresadoRequest = (formEgresado) => axios.post('/form_egresados', formEgresado);

export const updateFormEgresadoRequest = (id, formEgresado) => axios.put(`/form_egresados/${id}`, formEgresado);

export const deleteFormEgresadoRequest = (id) => axios.delete(`/form_egresados/${id}`);