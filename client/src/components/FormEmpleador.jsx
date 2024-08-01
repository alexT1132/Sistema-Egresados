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
import { useFormEmpleador } from "../context/FormEmpleadorContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FormEmpleador() {

  const navigate = useNavigate();

  const {user} = useAuth();

  const { createFormEmpleador } = useFormEmpleador();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = handleSubmit((data) => {
    createFormEmpleador(data);
    navigate('/empleador');
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
        <Grid item xs={12}>
            {errors.nombreCompleto && (
                <p style={{color: 'red'}}>La informacion es requerida</p>
            )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Nombre completo del empleador"
            {...register("nombreCompleto", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
        {errors.nombreComercial && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Nombre comercial de la empresa"
            {...register("nombreComercial", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
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
        {errors.ciudad && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            label="Ciudad"
            id="text"
            {...register("ciudad", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.municipio && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            label="Municipio"
            id="text"
            {...register("municipio", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.estado && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          margin="normal" 
          fullWidth 
          id="text" 
          label="Estado" 
          {...register("estado", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
        {errors.tipo && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%", mt: "16px" }} size="medium">
            <InputLabel id="demo-controlled-open-select-label">
              Su empresa es:
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open1}
              onClose={handleClose1}
              onOpen={handleOpen1}
              label="Su empresa es:"
              onChange={handleChange1}
              {...register("tipo", { required: true })}
            >
              <MenuItem value="Privada">Privada</MenuItem>
              <MenuItem value="Publica">Publica</MenuItem>
              <MenuItem value="Social">Social</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
        {errors.tamaño && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%", mt: "16px" }} size="medium">
            <InputLabel id="demo-controlled-open-select-label">
                Tamaño de la empresa
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open2}
              onClose={handleClose2}
              onOpen={handleOpen2}
              label="Tamaño de la empresa"
              onChange={handleChange2}
              {...register("tamaño", { required: true })}
            >
              <MenuItem value="Microempresa (1 - 30)">Microempresa (1 - 30)</MenuItem>
              <MenuItem value="Pequeña (31 - 100)">Pequeña (31 - 100)</MenuItem>
              <MenuItem value="Mediana (101 - 500)">Mediana (101 - 500)</MenuItem>
              <MenuItem value="Grande (Más de 500)">Grande (Más de 500)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
        {errors.clasificacion && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%", mt: "16px" }} size="medium">
            <InputLabel id="demo-controlled-open-select-label">
                Clasificaión de la empresa
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open3}
              onClose={handleClose3}
              onOpen={handleOpen3}
              label="Clasificaión de la empresa"
              onChange={handleChange3}
              {...register("clasificacion", { required: true })}
            >
              <MenuItem value="Agroindustrial">Agroindustrial</MenuItem>
              <MenuItem value="Caucho y plástico">Caucho y plástico</MenuItem>
              <MenuItem value="Comercio y turismo">Comercio y turismo</MenuItem>
              <MenuItem value="Construcción">Construcción</MenuItem>
              <MenuItem value="Educación">Educación</MenuItem>
              <MenuItem value="Electricidad, gas y agua">Electricidad, gas y agua</MenuItem>
              <MenuItem value="Industrias metálicas y básicas">Industrias metálicas y básicas</MenuItem>
              <MenuItem value="Madera y sus productos">Madera y sus productos</MenuItem>
              <MenuItem value="Minerales no metálicos">Minerales no metálicos</MenuItem>
              <MenuItem value="Minería">Minería</MenuItem>
              <MenuItem value="Papel, imprenta y editoriales">Papel, imprenta y editoriales</MenuItem>
              <MenuItem value="Pesca y acuacultura">Pesca y acuacultura</MenuItem>
              <MenuItem value="Productos metálicos, maquinario y equipo">Productos metálicos, maquinario y equipo</MenuItem>
              <MenuItem value="Química">Química</MenuItem>
              <MenuItem value="Servicios financieros, seguros, actividades inmobiliarias y de alquiler">Servicios financieros, seguros, actividades inmobiliarias y de alquiler</MenuItem>
              <MenuItem value="Silvicultura">Silvicultura</MenuItem>
              <MenuItem value="Textiles, vestido y cuero">Textiles, vestido y cuero</MenuItem>
              <MenuItem value="Transporte, almacenaje y comunicaciones">Transporte, almacenaje y comunicaciones</MenuItem>
              <MenuItem value="Otra">Otra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
        {errors.otro && (
            <p style={{color: 'red'}}>Si selecciono otra favor de especificar</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Si selecciono otra favor de especificar"
            {...register("otro", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
        {errors.completado && (
            <p style={{color: 'red'}}>Si selecciono otra favor de especificar</p>
          )}
          <TextField
            margin="normal"
            style={{display: 'none'}}
            fullWidth
            id="text"
            label="Si selecciono otra favor de especificar"
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