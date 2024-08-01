import FormEgresado from "../models/FormEgresado.model.js";

// Peticion para mostrar todos
export const getFormEgresados = async (req, res) => {
    const formEgresados = await FormEgresado.find();
    res.json(formEgresados);
}

export const createFormEgresado = async (req, res) => {
    try {
        const {
            carrera, 
            no_control, 
            nombre_completo,
            fecha_nacimiento,
            sexo,
            estadoCivil,
            domicilio,
            telefono,
            correo,
            facebook,
            instagram,
            periodoIngreso,
            periodoEgreso,
            titulado,
            fechaTitulacion,
            trabajaActualmente,
            nombreEmpresa,
            completado
        } = req.body

        const newFormEgresado = new FormEgresado({
            carrera,
            no_control,
            nombre_completo,
            fecha_nacimiento,
            sexo,
            estadoCivil,
            domicilio,
            telefono,
            correo,
            facebook,
            instagram,
            periodoIngreso,
            periodoEgreso,
            titulado,
            fechaTitulacion,
            trabajaActualmente,
            nombreEmpresa,
            completado
        });
        const savedFormEgresado = await newFormEgresado.save();
        res.json(savedFormEgresado);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// Peticion para mostrar uno
export const getFormEgresado = async (req, res) => {
    const formEgresados = await FormEgresado.findById(req.params.id);
    if (!formEgresados) return res.status(404).json({message: "Form not found"});
    res.json(formEgresados);
};

// Peticion para eliminar
export const deleteFormEgresado = async (req, res) => {
    const formEgresados = await FormEgresado.findByIdAndDelete(req.params.id);
    if (!formEgresados) return res.status(404).json({message: "Form not found"});
    return res.sendStatus(204);
};

// Peticion para actualizar
export const updateFormEgresado = async (req, res) => {
    const formEgresados = await FormEgresado.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!formEgresados) return res.status(404).json({message: "Form not found"});
    res.json(formEgresados);
};