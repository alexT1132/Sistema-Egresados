import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";
import { useFormEgresado } from "../context/FormEgresadoContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FormEgresado() {

  const { getFormEgresado } = useFormEgresado();

  const params = useParams();

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function loadFormEgre() {
      if(params.id) {
        const formEgresado = await getFormEgresado(params.id);
        setValue('carrera', formEgresado.carrera );
        setValue('no_control', formEgresado.no_control );
        setValue('nombre_completo', formEgresado.nombre_completo );
        setValue('fecha_nacimiento', formEgresado.fecha_nacimiento );
        setValue('sexo', formEgresado.sexo );
        setValue('estadoCivil', formEgresado.estadoCivil );
        setValue('domicilio', formEgresado.domicilio );
        setValue('telefono', formEgresado.telefono );
        setValue('correo', formEgresado.correo );
        setValue('facebook', formEgresado.facebook );
        setValue('instagram', formEgresado.instagram );
        setValue('periodoIngreso', formEgresado.periodoIngreso );
        setValue('periodoEgreso', formEgresado.periodoEgreso );
        setValue('titulado', formEgresado.titulado );
        setValue('fechaTitulacion', formEgresado.fechaTitulacion );
        setValue('trabajaActualmente', formEgresado.trabajaActualmente );
        setValue('nombreEmpresa', formEgresado.nombreEmpresa );
      }
    }
    loadFormEgre();
  }, []);

  return (
    <Box component="form" noValidate sx={{ width: "100%", marginLeft: 3 }}>
      <h2 style={{ textAlign: "center" }}>Datos del egresado</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          {errors.carrera && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Carrera</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register('carrera', {required: true})} 
          />
        </Grid>
        <Grid item xs={6}>
        {errors.no_control && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>No. Control</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("no_control", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
        {errors.nombre_completo && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Nombre completo</p>
          <TextField
            disabled
            fullWidth
            id="text"
            {...register("nombre_completo", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.fecha_nacimiento && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Fecha de nacimiento</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("fecha_nacimiento", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.sexo && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Sexo</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register('sexo', {required: true})} 
          />
        </Grid>
        <Grid item xs={4}>
        {errors.estadoCivil && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Estado civil</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("estadoCivil", { required: true })}
          />
        </Grid>
        <Grid item xs={8}>
        {errors.domicilio && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Domicilio</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("domicilio", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.telefono && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>telefono</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("telefono", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.correo && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Correo</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("correo", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.facebook && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Facebook</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("facebook", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.instagram && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Instagram</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("instagram", { required: true })}
          />
        </Grid>
        <Grid item xs={3}>
        {errors.periodoIngreso && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Periodo de ingreso</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("periodoIngreso", { required: true })}
          />
        </Grid>
        <Grid item xs={3}>
        {errors.periodoEgreso && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Periodo de egreso</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("periodoEgreso", { required: true })}
          />
        </Grid>
        <Grid item xs={3}>
        {errors.titulado && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Titulado</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register('titulado', {required: true})} 
          />
        </Grid>
        <Grid item xs={3}>
        {errors.fechaTitulacion && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Fecha de titulación</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("fechaTitulacion", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.trabajaActualmente && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Trabaja actualmente?</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register('trabajaActualmente', {required: true})} 
          />
        </Grid>
        <Grid item xs={8}>
        {errors.nombreEmpresa && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Nombre de la empresa</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("nombreEmpresa", { required: true })}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
