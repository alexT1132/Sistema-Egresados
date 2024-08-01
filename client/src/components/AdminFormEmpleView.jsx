import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFormEmpleador } from "../context/FormEmpleadorContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FormEmpleador() {

    const params = useParams();

  const { getFormEgre } = useFormEmpleador();

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function loadFormEmple() {
        if (params.id) {
            const formEmple = await getFormEgre(params.id);
            console.log(formEmple);
            setValue('nombreCompleto', formEmple.nombreCompleto );
            setValue('nombreComercial', formEmple.nombreComercial );
            setValue('domicilio', formEmple.domicilio );
            setValue('ciudad', formEmple.ciudad );
            setValue('municipio', formEmple.municipio );
            setValue('estado', formEmple.estado );
            setValue('tipo', formEmple.tipo );
            setValue('tamaño', formEmple.tamaño );
            setValue('clasificacion', formEmple.clasificacion );
            setValue('otro', formEmple.otro );            
        }
    }
    loadFormEmple();
  }, []);

  return (
    <Box component="form" noValidate sx={{ width: "100%", marginLeft: 3 }}>
      <h2 style={{ textAlign: "center" }}>Datos del empleador</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
            {errors.nombreCompleto && (
                <p style={{color: 'red'}}>La informacion es requerida</p>
            )}
            <p>Nombre del empleador</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("nombreCompleto", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
        {errors.nombreComercial && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <p>Nombre comercial de la empresa</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("nombreComercial", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
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
        {errors.ciudad && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <p>Ciudad</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("ciudad", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.municipio && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
                      <p>Municipio</p>
          <TextField
            fullWidth
            id="text"
            disabled
            {...register("municipio", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.estado && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Estado</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("estado", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.tipo && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
                      <p>Tipo de empresa</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("tipo", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.tamaño && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
                      <p>Tamaño de la empresa</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("tamaño", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.clasificacion && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Clasificación de la empresa</p>
          <TextField 
          fullWidth 
          id="text" 
          disabled
          {...register("clasificacion", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
        {errors.otro && (
            <p style={{color: 'red'}}>Si selecciono otra favor de especificar</p>
          )}
          <p>Si selecciono otro favor de especificar</p>
          <TextField
            fullWidth
            disabled
            id="text"
            {...register("otro", { required: true })}
          />
        </Grid>
      </Grid>
    </Box>
  );
}