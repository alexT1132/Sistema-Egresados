import { createContext, useContext, useState } from "react";
import { 
    getsFormEmpleadorRequest,
    createFormEmpleadorRequest,
    deleteFormEmpleadorRequest,
    getFormEmpleadorRequest,
    updateFormEmpleadorRequest,
} from "../api/formEmpleador.js";

    const FormEmpleadorContext = createContext();

    export const useFormEmpleador = () => {
        const context = useContext(FormEmpleadorContext);

        if (!context) {
            throw new Error("useFormEmpleador must be used within a FormEmpleadorProvider");
        }

        return context;

    }

    export function FormEmpleadorProvider({ children }) {

        const [formEmpleadores, setFormEmpleadores] = useState([]);

        const getsFormEmpleadores = async () => {
            try {
                const res = await getsFormEmpleadorRequest();
                setFormEmpleadores(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        const createFormEmpleador = async (formEmpleador) => {
            try {
                const res = await createFormEmpleadorRequest(formEmpleador);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        const deleteFormEgre = async (id) => {
            try {
                const res = await deleteFormEmpleadorRequest(id);
                if (res.status === 204) setFormEmpleadores(formEmpleadores.filter((formEmpleador) => formEmpleador._id !== id));
            } catch (error) {
                console.log(error);
            }
        }

        const getFormEgre = async (id) => {
            try {
                const res = await getFormEmpleadorRequest(id);
                return res.data
            } catch (error) {
                console.log(error);
            }
        }
        
        const updateFormEgre = async (id, task) => {
            try {
                await updateFormEmpleadorRequest(id, task);
            } catch (error) {
                console.log(error);
            }
        }

        return (
            <FormEmpleadorContext.Provider value={{
                formEmpleadores,
                createFormEmpleador,
                getsFormEmpleadores,
                deleteFormEgre,
                getFormEgre,
                updateFormEgre
            }}>
                {children}
            </FormEmpleadorContext.Provider>
        )
    }