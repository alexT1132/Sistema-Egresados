import { createContext, useContext, useState } from "react";
import { 
    getsEncuestEmpleadoresRequest,
    createEncuestEmpleadorRequest,
    getEncuestEmpleadorRequest,
    deleteEncuestEmpleadorRequest,
    updateEncuestEmpleadorRequest
} from "../api/encuestEmpleador.js";

    const EncuestaEmpleadorContext = createContext();

    export const useEncuestEmpleador = () => {
        const context = useContext(EncuestaEmpleadorContext);

        if (!context) {
            throw new Error("useEncuestEmpleador must be used within a EncuestEmpleadorProvider");
        }

        return context;

    }

    export function EncuestEmpleadorProvider({ children }) {

        const [encuestEmples, setEncuestEmples] = useState([]);

        const getsEncuestEmple = async () => {
            try {
                const res = await getsEncuestEmpleadoresRequest();
                setEncuestEmples(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        const createEncuestEmple = async (encuestEmpleador) => {
            try {
                const res = await createEncuestEmpleadorRequest(encuestEmpleador);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        const deleteEncuestaEmple = async (id) => {
            try {
                const res = await deleteEncuestEmpleadorRequest(id);
                if (res.status === 204) setEncuestEmples(encuestEmples.filter((encuestEmple) => encuestEmple._id !== id));
            } catch (error) {
                console.log(error);
            }
        }

        const getEncuestaEmple = async (id) => {
            try {
                const res = await getEncuestEmpleadorRequest(id);
                return res.data
            } catch (error) {
                console.log(error);
            }
        }
        

        return (
            <EncuestaEmpleadorContext.Provider value={{
                encuestEmples,
                createEncuestEmple,
                getsEncuestEmple,
                deleteEncuestaEmple,
                getEncuestaEmple,
            }}>
                {children}
            </EncuestaEmpleadorContext.Provider>
        )
    }