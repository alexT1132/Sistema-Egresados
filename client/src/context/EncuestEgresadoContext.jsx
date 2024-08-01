import { createContext, useContext, useState } from "react";
import { 
    getsEncuestEgresadosRequest,
    createEncuestEgresadoRequest,
    getEncuestEgresadoRequest,
    deleteEncuestEgresadoRequest,
    updateEncuestEgresadoRequest
} from "../api/encuestEgresado.js";

    const EncuestaEgresadoContext = createContext();

    export const useEncuestEgresado = () => {
        const context = useContext(EncuestaEgresadoContext);

        if (!context) {
            throw new Error("useEncuestEgresado must be used within a EncuestEgresadoProvider");
        }

        return context;

    }

    export function EncuestEgresadoProvider({ children }) {

        const [encuestEgres, setEncuestEgres] = useState([]);

        const getsEncuestEgre = async () => {
            try {
                const res = await getsEncuestEgresadosRequest();
                setEncuestEgres(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        const createEncuestEgresado = async (encuestEgresado) => {
            try {
                const res = await createEncuestEgresadoRequest(encuestEgresado);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        const deleteEncuestaEgre = async (id) => {
            try {
                const res = await deleteEncuestEgresadoRequest(id);
                if (res.status === 204) setEncuestEgres(encuestEgres.filter((encuestEgre) => encuestEgre._id !== id));
            } catch (error) {
                console.log(error);
            }
        }

        const getEncuestaEgre = async (id) => {
            try {
                const res = await getEncuestEgresadoRequest(id);
                return res.data
            } catch (error) {
                console.log(error);
            }
        }

        return (
            <EncuestaEgresadoContext.Provider value={{
                encuestEgres,
                createEncuestEgresado,
                getsEncuestEgre,
                getEncuestaEgre,
                deleteEncuestaEgre,
            }}>
                {children}
            </EncuestaEgresadoContext.Provider>
        )
    }