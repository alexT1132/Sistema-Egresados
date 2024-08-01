import { createContext, useContext, useState } from "react";
import { 
    getsFormEgresadosRequest,
    createFormEgresadoRequest,
    deleteFormEgresadoRequest,
    getFormEgresadoRequest,
    updateFormEgresadoRequest
} from "../api/formEgresado.js";

    const FormEgresadoContext = createContext();

    export const useFormEgresado = () => {
        const context = useContext(FormEgresadoContext);

        if (!context) {
            throw new Error("useFormEgresado must be used within a FormEgresadoProvider");
        }

        return context;

    }

    export function FormEgresadoProvider({ children }) {

        const [formEgres, setFormEgres] = useState([]);

        const getsFormEgre = async () => {
            try {
                const res = await getsFormEgresadosRequest();
                setFormEgres(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        const createFormEgresado = async (formEgresado) => {
            try {
                const res = await createFormEgresadoRequest(formEgresado);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        const deleteFormEgre = async (id) => {
            try {
                const res = await deleteFormEgresadoRequest(id);
                if (res.status === 204) setFormEgres(formEgres.filter((formEgre) => formEgre._id !== id));
            } catch (error) {
                console.log(error);
            }
        }

        const getFormEgresado = async (id) => {
            try {
                const res = await getFormEgresadoRequest(id);
                return res.data
            } catch (error) {
                console.log(error);
            }
        }
        
        const updateFormEgresado = async (id, task) => {
            try {
                await updateFormEgresadoRequest(id, task);
            } catch (error) {
                console.log(error);
            }
        }

        return (
            <FormEgresadoContext.Provider value={{
                formEgres,
                createFormEgresado,
                getsFormEgre,
                deleteFormEgre,
                getFormEgresado,
                updateFormEgresado
            }}>
                {children}
            </FormEgresadoContext.Provider>
        )
    }