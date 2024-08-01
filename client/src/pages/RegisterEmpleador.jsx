import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavbrRegister from "../components/NavbarRegister";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function RegisterEmpleador() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, errors: registerErrors } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavbrRegister />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3">
            Registro
          </Typography>
            {
              registerErrors.map((error, i) => (
                <div 
                style={{
                    background: 'red', 
                    color: 'white', 
                    height: 40, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 8,
                    marginBottom: 8,
                    fontSize: 20
                  }} key={i}>
                  {error}
                </div>
              ))
            }
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {errors.nombre && (
                  <p style={{ color: "red" }}>El nombre es requerido</p>
                )}
                <TextField
                  required
                  fullWidth
                  {...register("nombre", { required: true })}
                  id="nombre"
                  label="Nombre completo"
                />
              </Grid>
              <Grid item xs={12}>
                {errors.usuario && (
                  <p style={{ color: "red" }}>El usuario es requerido</p>
                )}
                <TextField
                  required
                  fullWidth
                  {...register("usuario", { required: true })}
                  id="usuario"
                  label="Usuario"
                />
              </Grid>
              <Grid item xs={12}>
                {errors.contraseña && (
                  <p style={{ color: "red" }}>La contraseña es requerido</p>
                )}
                <TextField
                  required
                  fullWidth
                  {...register("contraseña", { required: true })}
                  label="Contraseña"
                  type="password"
                  id="contraseña"
                />
              </Grid>
              <Grid item xs={12} style={{ display: "none" }}>
                <TextField
                  required
                  fullWidth
                  value="empleador"
                  {...register("role", { required: true })}
                  label="Role"
                  id="role"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
