import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useForm } from "react-hook-form";
import { useFormEgresado } from "../context/FormEgresadoContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FormEgresado() {

  const navigate = useNavigate();

  const {user} = useAuth();

  const { createFormEgresado } = useFormEgresado();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = handleSubmit((data) => {
    createFormEgresado(data);
    navigate('/egresado');
  }
);

  const [age1, setAge1] = React.useState("");
  const [open1, setOpen1] = React.useState(false);

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const [age2, setAge2] = React.useState("");
  const [open2, setOpen2] = React.useState(false);

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const [age3, setAge3] = React.useState("");
  const [open3, setOpen3] = React.useState(false);

  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ width: "100%", marginLeft: 3 }}>
      <h2 style={{ textAlign: "center" }}>Ingrese sus datos</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          {errors.carrera && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          margin="normal" 
          fullWidth 
          id="text" 
          label="Carrera" 
          {...register('carrera', {required: true})} 
          />
        </Grid>
        <Grid item xs={6}>
        {errors.no_control && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="No. Control"
            {...register("no_control", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
        {errors.nombre_completo && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Nombre completo"
            {...register("nombre_completo", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.fecha_nacimiento && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            label="Fecha de nacimiento"
            id="text"
            {...register("fecha_nacimiento", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.sexo && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%", mt: "16px" }} size="medium">
            <InputLabel id="demo-controlled-open-select-label">Sexo</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open1}
              onClose={handleClose1}
              onOpen={handleOpen1}
              label="Sexo"
              onChange={handleChange1}
              {...register("sexo", { required: true })}
            >
              <MenuItem value="">
                <em>Selecciona una opción</em>
              </MenuItem>
              <MenuItem value="Masculino">Masculino</MenuItem>
              <MenuItem value="Femenino">Femenino</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
        {errors.estadoCivil && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          margin="normal" 
          fullWidth 
          id="text" 
          label="Estado civil" 
          {...register("estadoCivil", { required: true })}
          />
        </Grid>
        <Grid item xs={8}>
        {errors.domicilio && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          margin="normal" 
          fullWidth 
          id="text" 
          label="Domicilio"
          {...register("domicilio", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.telefono && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          margin="normal" 
          fullWidth 
          id="text" 
          label="Telefono"
          {...register("telefono", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.correo && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          margin="normal" 
          fullWidth 
          id="text" 
          label="Correo"
          {...register("correo", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.facebook && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          margin="normal" 
          fullWidth 
          id="text" 
          label="Facebook"
          {...register("facebook", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.instagram && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          margin="normal" 
          fullWidth 
          id="text" 
          label="Instagram"
          {...register("instagram", { required: true })}
          />
        </Grid>
        <Grid item xs={3}>
        {errors.periodoIngreso && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Periodo de ingreso"
            {...register("periodoIngreso", { required: true })}
          />
        </Grid>
        <Grid item xs={3}>
        {errors.periodoEgreso && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Periodo de egreso"
            {...register("periodoEgreso", { required: true })}
          />
        </Grid>
        <Grid item xs={3}>
        {errors.titulado && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%", mt: "16px" }} size="medium">
            <InputLabel id="demo-controlled-open-select-label">
              Titulado
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open2}
              onClose={handleClose2}
              onOpen={handleOpen2}
              label="Titulado"
              onChange={handleChange2}
              {...register("titulado", { required: true })}
            >
              <MenuItem value="">
                <em>Selecciona una opción</em>
              </MenuItem>
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
        {errors.fechaTitulacion && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Fecha de titulacion"
            {...register("fechaTitulacion", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.trabajaActualmente && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%", mt: "16px" }} size="medium">
            <InputLabel id="demo-controlled-open-select-label">
              ¿Trabaja actualmente?
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open3}
              onClose={handleClose3}
              onOpen={handleOpen3}
              label="Trabaja actualmente"
              onChange={handleChange3}
              {...register("trabajaActualmente", { required: true })}
            >
              <MenuItem value="">
                <em>Selecciona una opción</em>
              </MenuItem>
              <MenuItem value="Si">Si</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
        {errors.nombreEmpresa && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Nombre de la empresa"
            {...register("nombreEmpresa", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
        {errors.completado && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            style={{display: 'none'}}
            margin="normal"
            fullWidth
            id="text"
            label="completado"
            value={user.usuario}
            {...register("completado", { required: true })}
          />
        </Grid>
        <Grid item xs={8}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, ml: "21%" }}
          >
            Registrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
