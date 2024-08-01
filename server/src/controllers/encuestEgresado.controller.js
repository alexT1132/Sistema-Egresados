import EncuestEgresado from "../models/EncuestEgresado.model.js";

// Peticion para mostrar todos
export const getEncuestEgresados = async (req, res) => {
    try {
        const encuestEgresados = await EncuestEgresado.find();
        res.json(encuestEgresados);
    } catch (error) {
        console.log(error);
    }
}

export const createEncuestEgresado = async (req, res) => {
    try {
        const { 
            p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
            p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
            p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
            p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
            p41, p42, p43, p44, p45, p46, p47, p48, p49, p50,
            p51, p52, p53, p54, p55, p56, p57, p58, p59, p60,
            p61, p62, p63, p64, p65, p66, p67, p68, p69, p70,
            p71, p72, p73
        } = req.body

        const newEncuestEgresado = new EncuestEgresado({
            p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
            p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
            p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
            p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
            p41, p42, p43, p44, p45, p46, p47, p48, p49, p50,
            p51, p52, p53, p54, p55, p56, p57, p58, p59, p60,
            p61, p62, p63, p64, p65, p66, p67, p68, p69, p70,
            p71, p72, p73
        });
        const savedEncuestEgresado = await newEncuestEgresado.save();
        res.json(savedEncuestEgresado);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

// Peticion para mostrar uno
export const getEncuestEgresado = async (req, res) => {
    const encuestEgresado = await EncuestEgresado.findById(req.params.id);
    if (!encuestEgresado) return res.status(404).json({message: "Encuest not found"});
    res.json(encuestEgresado);
};

// Peticion para eliminar
export const deleteEncuestEgresado = async (req, res) => {
    const encuestEgresados = await EncuestEgresado.findByIdAndDelete(req.params.id);
    if (!encuestEgresados) return res.status(404).json({message: "Encuest not found"});
    return res.sendStatus(204);
};

// Peticion para actualizar
export const updateEncuestEgresado = async (req, res) => {
    const encuestEgresados = await EncuestEgresado.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!encuestEgresados) return res.status(404).json({message: "Encuest not found"});
    res.json(encuestEgresados);
};