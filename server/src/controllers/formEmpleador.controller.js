import FormEmpleador from "../models/FormEmpleador.model.js";

// Peticion para mostrar todos
export const getFormEmpleadores = async (req, res) => {
    const formEmpleadores = await FormEmpleador.find();
    res.json(formEmpleadores);
}

export const createFormEmpleadores = async (req, res) => {
    try {
        const {
            nombreCompleto, 
            nombreComercial, 
            domicilio,
            ciudad,
            municipio,
            estado,
            tipo,
            tamaño,
            clasificacion,
            otro,
            completado
        } = req.body

        const newFormEmpleador = new FormEmpleador({
            nombreCompleto,
            nombreComercial,
            domicilio,
            ciudad,
            municipio,
            estado,
            tipo,
            tamaño,
            clasificacion,
            otro,
            completado
        });
        const savedFormEmpleador = await newFormEmpleador.save();
        res.json(savedFormEmpleador);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// Peticion para mostrar uno
export const getFormEmpleador = async (req, res) => {
    const formEmpleador = await FormEmpleador.findById(req.params.id);
    if (!formEmpleador) return res.status(404).json({message: "Form not found"});
    res.json(formEmpleador);
};

// Peticion para eliminar
export const deleteFormEmpleador = async (req, res) => {
    const formEmpleador = await FormEmpleador.findByIdAndDelete(req.params.id);
    if (!formEmpleador) return res.status(404).json({message: "Form not found"});
    return res.sendStatus(204);
};

// Peticion para actualizar
export const updateFormEmpleador = async (req, res) => {
    const formEmpleador = await FormEmpleador.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!formEmpleador) return res.status(404).json({message: "Form not found"});
    res.json(formEmpleador);
};