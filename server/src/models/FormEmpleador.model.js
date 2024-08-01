import mongoose from "mongoose";

const formEmpleadorSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true,
    },
    nombreComercial: {
        type: String,
        required: true,
    },
    domicilio: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    municipio: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    tamaño: {
        type: String,
        required: true,
    },
    clasificacion: {
        type: String,
        required: true,
    },
    otro: {
        type: String,
        required: true,
    },
    completado: {
        type: String,
        required: true,
    },
});

export default mongoose.model("FormEmpleador", formEmpleadorSchema);