import { z } from "zod";

export const registerSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  usuario: z.string({
    required_error: "Usuario requerido",
  }),
  contraseña: z.string({
    required_error: "Contraseña requerida",
  }),
  role: z.string({
    required_error: "role requerido",
  }),
});

export const loginSchema = z.object({
  usuario: z.string({
    required_error: "Usuario requerido",
  }),
  contraseña: z.string({
    required_error: "Contraseña requerida",
  }),
});
