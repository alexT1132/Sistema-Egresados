import axios from "./axios.js";

export const getsFormEmpleadorRequest = () => axios.get('/form_empleador');

export const getFormEmpleadorRequest = (id) => axios.get(`/form_empleador/${id}`);

export const createFormEmpleadorRequest = (formEmpleador) => axios.post('/form_empleador', formEmpleador);

export const updateFormEmpleadorRequest = (id, formEmpleador) => axios.put(`/form_empleador/${id}`, formEmpleador);

export const deleteFormEmpleadorRequest = (id) => axios.delete(`/form_empleador/${id}`);