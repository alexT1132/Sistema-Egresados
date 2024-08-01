import EncuestEmpleador from "../models/encuestEmpleador.model.js";

// Peticion para mostrar todos
export const getEncuestEmpleadores = async (req, res) => {
    try {
        const encuestEmpleadores = await EncuestEmpleador.find();
        res.json(encuestEmpleadores);
    } catch (error) {
        console.log(error);
    }
}

// Peticion para crear
export const createEncuestEmpleador = async (req, res) => {
    try {
        const { 
            p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
            p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
            p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
            p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
            p41, p42, p43, p44, p45, p46, p47, p48, p49, p50,
            p51, p52, p53, p54, p55, p56
        } = req.body

        const newEncuestEmpleador = new EncuestEmpleador({
            p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
            p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
            p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
            p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
            p41, p42, p43, p44, p45, p46, p47, p48, p49, p50,
            p51, p52, p53, p54, p55, p56
        });
        const savedEncuestEmpleador = await newEncuestEmpleador.save();
        res.json(savedEncuestEmpleador);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// Peticion para mostrar uno
export const getEncuestEmpleador = async (req, res) => {
    const encuestEmpleador = await EncuestEmpleador.findById(req.params.id);
    if (!encuestEmpleador) return res.status(404).json({message: "Encuest not found"});
    res.json(encuestEmpleador);
};

// Peticion para eliminar
export const deleteEncuestEmpleador = async (req, res) => {
    const encuestEmpleador = await EncuestEmpleador.findByIdAndDelete(req.params.id);
    if (!encuestEmpleador) return res.status(404).json({message: "Encuest not found"});
    return res.sendStatus(204);
};

// Peticion para actualizar
export const updateEncuestEmpleador = async (req, res) => {
    const encuestEmpleador = await EncuestEmpleador.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!encuestEmpleador) return res.status(404).json({message: "Encuest not found"});
    res.json(encuestEmpleador);
};