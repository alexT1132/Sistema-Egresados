import * as React from 'react';
import { useEffect } from "react";
import LogoTec from "../assets/LOGO-VERTICAL-TECNM.webp";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import Nav from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signin, errors: loginErrors, isAuthenticated, user } = useAuth();

  const navegation = useNavigate();


  const onSubmit = handleSubmit((data) => {
    signin(data);
});

  useEffect(() => {
    if (isAuthenticated){
      if (user.role === 'administrador') {
        navegation('/admin');
      } else 
      if (user.role === 'empleador') {
        navegation('/empleador');
      } else
      if (user.role === 'egresado') {
        navegation('/egresado');
      }
    }
  }, [isAuthenticated])

  return (
    <>
    <Nav />
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={LogoTec} style={{height: 180}} />
          {
              loginErrors.map((error, i) => (
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
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            {errors.usuario && (
              <p style={{color: 'red'}} >El usuario es requerido</p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              {...register('usuario', {required: true})}
              label="Usuario"
            />
            {errors.contraseña && (
              <p style={{color: 'red'}} >La contraseña es requerida</p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              {...register('contraseña', {required: true})}
              label="Contraseña"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}