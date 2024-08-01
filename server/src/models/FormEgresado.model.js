import mongoose from "mongoose";

const formEgresadoSchema = new mongoose.Schema({
    carrera: {
        type: String,
        required: true,
    },
    no_control: {
        type: String,
        required: true,
    },
    nombre_completo: {
        type: String,
        required: true,
    },
    fecha_nacimiento: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    estadoCivil: {
        type: String,
        required: true,
    },
    domicilio: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    facebook: {
        type: String,
        required: true,
    },
    instagram: {
        type: String,
        required: true,
    },
    periodoIngreso: {
        type: String,
        required: true,
    },
    periodoEgreso: {
        type: String,
        required: true,
    },
    titulado: {
        type: String,
        required: true,
    },
    fechaTitulacion: {
        type: String,
        required: true,
    },
    trabajaActualmente: {
        type: String,
        required: true,
    },
    nombreEmpresa: {
        type: String,
        required: true,
    },
    completado: {
        type: String,
        required: true,
    }
});

export default mongoose.model("FormEgresado", formEgresadoSchema);