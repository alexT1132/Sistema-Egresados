import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEncuestEmpleador } from "../context/EncuestEmpleadorContext";
import { useNavigate } from "react-router-dom";

function EncuestaEmpleador() {

  const navegation = useNavigate();

    const {createEncuestEmple} = useEncuestEmpleador();
    const {user} = useAuth();

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = handleSubmit((data) => {
      createEncuestEmple(data);
      navegation('/empleador');
    }
  );

    const [P1, setP1] = React.useState("");
    const [open1, setOpen1] = React.useState(false);

    const handleChange1 = (event) => {
        setP1(event.target.value);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleOpen1 = () => {
        setOpen1(true);
    };

    const [P8, setP8] = React.useState("");
    const [open8, setOpen8] = React.useState(false);

    const handleChange8 = (event) => {
        setP8(event.target.value);
    };

    const handleClose8 = () => {
        setOpen8(false);
    };

    const handleOpen8 = () => {
        setOpen8(true);
    };

    const [P18, setP18] = React.useState("");
    const [open18, setOpen18] = React.useState(false);

    const handleChange18 = (event) => {
        setP18(event.target.value);
    };

    const handleClose18 = () => {
        setOpen18(false);
    };

    const handleOpen18 = () => {
        setOpen18(true);
    };

    const [P19, setP19] = React.useState("");
    const [open19, setOpen19] = React.useState(false);

    const handleChange19 = (event) => {
        setP19(event.target.value);
    };

    const handleClose19 = () => {
        setOpen19(false);
    };

    const handleOpen19 = () => {
        setOpen19(true);
    };

    const [P20, setP20] = React.useState("");
    const [open20, setOpen20] = React.useState(false);

    const handleChange20 = (event) => {
        setP20(event.target.value);
    };

    const handleClose20 = () => {
        setOpen20(false);
    };

    const handleOpen20 = () => {
        setOpen20(true);
    };

    const [P21, setP21] = React.useState("");
    const [open21, setOpen21] = React.useState(false);

    const handleChange21 = (event) => {
        setP21(event.target.value);
    };

    const handleClose21 = () => {
        setOpen21(false);
    };

    const handleOpen21 = () => {
        setOpen21(true);
    };

    const [P22, setP22] = React.useState("");
    const [open22, setOpen22] = React.useState(false);

    const handleChange22 = (event) => {
        setP22(event.target.value);
    };

    const handleClose22 = () => {
        setOpen22(false);
    };

    const handleOpen22 = () => {
        setOpen22(true);
    };

    const [P23, setP23] = React.useState("");
    const [open23, setOpen23] = React.useState(false);

    const handleChange23 = (event) => {
        setP23(event.target.value);
    };

    const handleClose23 = () => {
        setOpen23(false);
    };

    const handleOpen23 = () => {
        setOpen23(true);
    };

    const [P24, setP24] = React.useState("");
    const [open24, setOpen24] = React.useState(false);

    const handleChange24 = (event) => {
        setP24(event.target.value);
    };

    const handleClose24 = () => {
        setOpen24(false);
    };

    const handleOpen24 = () => {
        setOpen24(true);
    };

    const [P25, setP25] = React.useState("");
    const [open25, setOpen25] = React.useState(false);

    const handleChange25 = (event) => {
        setP25(event.target.value);
    };

    const handleClose25 = () => {
        setOpen25(false);
    };

    const handleOpen25 = () => {
        setOpen25(true);
    };

    const [P26, setP26] = React.useState("");
    const [open26, setOpen26] = React.useState(false);

    const handleChange26 = (event) => {
        setP26(event.target.value);
    };

    const handleClose26 = () => {
        setOpen26(false);
    };

    const handleOpen26 = () => {
        setOpen26(true);
    };

    const [P27, setP27] = React.useState("");
    const [open27, setOpen27] = React.useState(false);

    const handleChange27 = (event) => {
        setP27(event.target.value);
    };

    const handleClose27 = () => {
        setOpen27(false);
    };

    const handleOpen27 = () => {
        setOpen27(true);
    };

    const [P28, setP28] = React.useState("");
    const [open28, setOpen28] = React.useState(false);

    const handleChange28 = (event) => {
        setP28(event.target.value);
    };

    const handleClose28 = () => {
        setOpen28(false);
    };

    const handleOpen28 = () => {
        setOpen28(true);
    };

    const [P29, setP29] = React.useState("");
    const [open29, setOpen29] = React.useState(false);

    const handleChange29 = (event) => {
        setP29(event.target.value);
    };

    const handleClose29 = () => {
        setOpen29(false);
    };

    const handleOpen29 = () => {
        setOpen29(true);
    };

    const [P30, setP30] = React.useState("");
    const [open30, setOpen30] = React.useState(false);

    const handleChange30 = (event) => {
        setP30(event.target.value);
    };

    const handleClose30 = () => {
        setOpen30(false);
    };

    const handleOpen30 = () => {
        setOpen30(true);
    };

    const [P31, setP31] = React.useState("");
    const [open31, setOpen31] = React.useState(false);

    const handleChange31 = (event) => {
        setP31(event.target.value);
    };

    const handleClose31 = () => {
        setOpen31(false);
    };

    const handleOpen31 = () => {
        setOpen31(true);
    };

    const [P32, setP32] = React.useState("");
    const [open32, setOpen32] = React.useState(false);

    const handleChange32 = (event) => {
        setP32(event.target.value);
    };

    const handleClose32 = () => {
        setOpen32(false);
    };

    const handleOpen32 = () => {
        setOpen32(true);
    };

    const [P33, setP33] = React.useState("");
    const [open33, setOpen33] = React.useState(false);

    const handleChange33 = (event) => {
        setP33(event.target.value);
    };

    const handleClose33 = () => {
        setOpen33(false);
    };

    const handleOpen33 = () => {
        setOpen33(true);
    };

    const [P34, setP34] = React.useState("");
    const [open34, setOpen34] = React.useState(false);

    const handleChange34 = (event) => {
        setP34(event.target.value);
    };

    const handleClose34 = () => {
        setOpen34(false);
    };

    const handleOpen34 = () => {
        setOpen34(true);
    };

    const [P35, setP35] = React.useState("");
    const [open35, setOpen35] = React.useState(false);

    const handleChange35 = (event) => {
        setP35(event.target.value);
    };

    const handleClose35 = () => {
        setOpen35(false);
    };

    const handleOpen35 = () => {
        setOpen35(true);
    };

    const [P36, setP36] = React.useState("");
    const [open36, setOpen36] = React.useState(false);

    const handleChange36 = (event) => {
        setP36(event.target.value);
    };

    const handleClose36 = () => {
        setOpen36(false);
    };

    const handleOpen36 = () => {
        setOpen36(true);
    };

    const [P37, setP37] = React.useState("");
    const [open37, setOpen37] = React.useState(false);

    const handleChange37 = (event) => {
        setP37(event.target.value);
    };

    const handleClose37 = () => {
        setOpen37(false);
    };

    const handleOpen37 = () => {
        setOpen37(true);
    };

    const [P38, setP38] = React.useState("");
    const [open38, setOpen38] = React.useState(false);

    const handleChange38 = (event) => {
        setP38(event.target.value);
    };

    const handleClose38 = () => {
        setOpen38(false);
    };

    const handleOpen38 = () => {
        setOpen38(true);
    };

    const [P39, setP39] = React.useState("");
    const [open39, setOpen39] = React.useState(false);

    const handleChange39 = (event) => {
        setP39(event.target.value);
    };

    const handleClose39 = () => {
        setOpen39(false);
    };

    const handleOpen39 = () => {
        setOpen39(true);
    };

    const [P40, setP40] = React.useState("");
    const [open40, setOpen40] = React.useState(false);

    const handleChange40 = (event) => {
        setP40(event.target.value);
    };

    const handleClose40 = () => {
        setOpen40(false);
    };

    const handleOpen40 = () => {
        setOpen40(true);
    };

    const [P41, setP41] = React.useState("");
    const [open41, setOpen41] = React.useState(false);

    const handleChange41 = (event) => {
        setP41(event.target.value);
    };

    const handleClose41 = () => {
        setOpen41(false);
    };

    const handleOpen41 = () => {
        setOpen41(true);
    };

    const [P42, setP42] = React.useState("");
    const [open42, setOpen42] = React.useState(false);

    const handleChange42 = (event) => {
        setP42(event.target.value);
    };

    const handleClose42 = () => {
        setOpen42(false);
    };

    const handleOpen42 = () => {
        setOpen42(true);
    };

    const [P43, setP43] = React.useState("");
    const [open43, setOpen43] = React.useState(false);

    const handleChange43 = (event) => {
        setP43(event.target.value);
    };

    const handleClose43 = () => {
        setOpen43(false);
    };

    const handleOpen43 = () => {
        setOpen43(true);
    };

    const [P44, setP44] = React.useState("");
    const [open44, setOpen44] = React.useState(false);

    const handleChange44 = (event) => {
        setP44(event.target.value);
    };

    const handleClose44 = () => {
        setOpen44(false);
    };

    const handleOpen44 = () => {
        setOpen44(true);
    };

    const [P45, setP45] = React.useState("");
    const [open45, setOpen45] = React.useState(false);

    const handleChange45 = (event) => {
        setP45(event.target.value);
    };

    const handleClose45 = () => {
        setOpen45(false);
    };

    const handleOpen45 = () => {
        setOpen45(true);
    };

    const [P46, setP46] = React.useState("");
    const [open46, setOpen46] = React.useState(false);

    const handleChange46 = (event) => {
        setP46(event.target.value);
    };

    const handleClose46 = () => {
        setOpen46(false);
    };

    const handleOpen46 = () => {
        setOpen46(true);
    };

    const [P47, setP47] = React.useState("");
    const [open47, setOpen47] = React.useState(false);

    const handleChange47 = (event) => {
        setP47(event.target.value);
    };

    const handleClose47 = () => {
        setOpen47(false);
    };

    const handleOpen47 = () => {
        setOpen47(true);
    };

    const [P48, setP48] = React.useState("");
    const [open48, setOpen48] = React.useState(false);

    const handleChange48 = (event) => {
        setP48(event.target.value);
    };

    const handleClose48 = () => {
        setOpen48(false);
    };

    const handleOpen48 = () => {
        setOpen48(true);
    };

    const [P49, setP49] = React.useState("");
    const [open49, setOpen49] = React.useState(false);

    const handleChange49 = (event) => {
        setP49(event.target.value);
    };

    const handleClose49 = () => {
        setOpen49(false);
    };

    const handleOpen49 = () => {
        setOpen49(true);
    };

  return (
    <div className="container-encuesta">
        <form onSubmit={onSubmit}>
        <section className="encuesta">
            {/* P0 */}
            {errors.p0 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextField
                margin="normal"
                fullWidth
                id="text"
                label="Nombre comercial de la empresa"
                {...register('p0', {required: true})} 
            />
            <hr style={{ marginTop: 20 }} />
            {/* P1 */}
            {errors.p1 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextField
                margin="normal"
                fullWidth
                id="text"
                label="Nombre del empleador"
                {...register('p1', {required: true})} 
            />
        </section>
        <section className="encuesta">
            <h1>I. UBICACIÓN LABORAL DE LOS EGRESADOS.</h1>
        </section>
        <section className="encuesta">
        <h3>1.- Número de profesionistas con nivel de licenciatura que laboran en la empresa u organismo:</h3>
            {/* P2 */}
            {errors.p2 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p2">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open1}
              onClose={handleClose1}
              onOpen={handleOpen1}
              label="Selecciona una opcion"
              onChange={handleChange1}
              {...register('p2', {required: true})} 
            >
              <MenuItem value="Muy buena">1 a 2</MenuItem>
              <MenuItem value="Buena">2 a 6</MenuItem>
              <MenuItem value="Regular">6 a 8</MenuItem>
              <MenuItem value="Mala">8 a 10</MenuItem>
              <MenuItem value="Mala">Más de 10</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
          <h1>2.- Cantidad y nivel jerárquico que ocupan en su organización ingenieros bioquímicos 
            egresados de nuestro plantel:</h1>
            <hr style={{ marginTop: 20 }} /> 
            {errors.p3 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3 style={{textAlign: 'center'}}>Mando superior</h3>
            </Grid>
            {/* P3 */}
            <Grid item xs={6}>
              <TextField 
              fullWidth 
              id="text"
              label='Escribe la una cantidad'
              {...register('p3', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr /> 
            {errors.p4 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3 style={{textAlign: 'center'}}>Mando intermedio</h3>
            </Grid>
            {/* P4 */}
            <Grid item xs={6}>
              <TextField 
              fullWidth 
              id="text"
              label='Escribe la una cantidad'
              {...register('p4', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr /> 
            {errors.p5 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3 style={{textAlign: 'center'}}>Supervisor o equivalente</h3>
            </Grid>
            {/* P5 */}
            <Grid item xs={6}>
              <TextField
              fullWidth 
              id="text"
              label='Escribe la una cantidad'
              {...register('p5', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr /> 
            {errors.p6 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3 style={{textAlign: 'center'}}>Técnico o Auxiliar</h3>
            </Grid>
            {/* P6 */}
            <Grid item xs={6}>
              <TextField 
              fullWidth 
              id="text"
              label='Escribe la una cantidad'
              {...register('p6', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr /> 
            {errors.p7 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3 style={{textAlign: 'center'}}>Otros (Especifique)</h3>
            </Grid>
            {/* P7 */}
            <Grid item xs={6}>
              <TextField 
              fullWidth 
              id="text"
              label='Escribe la una cantidad y especifique'
              {...register('p7',{required: true})} 
              />
            </Grid>
          </Grid>
          <hr style={{ marginTop: 20 }} />
          <h1>3.- Congruencia entre perfil profesional y función que desarrollan los egresados del Instituto Tecnológico en su empresa u organización.</h1>
             {/* P8 */}
             {errors.p8 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open8}
              onClose={handleClose8}
              onOpen={handleOpen8}
              label="Selecciona una opcion"
              onChange={handleChange8}
              {...register('p8', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
            <hr style={{ marginTop: 20 }} />
          <h1>4.- Cantidad y nivel jerárquico que ocupan en su organización ingenieros bioquímicos egresados de nuestro plantel</h1>
          <hr style={{ marginTop: 20 }} />
            {errors.p9 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>a. Área o campo de estudio</h3>
            </Grid>
            {/* P9 */}
            <Grid item xs={6}>
              <TextField 
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p9', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr />
            {errors.p10 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>b. Titulación</h3>
            </Grid>
            {/* P10 */}
            <Grid item xs={6}>
              <TextField
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p10', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr />
            {errors.p11 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>c. Experiencia laboral/ práctica (antes de egresar)</h3>
            </Grid>
            {/* P11 */}
            <Grid item xs={6}>
              <TextField 
              style={{ marginTop: 18}}
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p11', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr />
            {errors.p12 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>d. Posicionamiento de la Institución de Egreso</h3>
            </Grid>
            {/* P12 */}
            <Grid item xs={6}>
              <TextField 
              style={{ marginTop: 18}}
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p12', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr />
          {errors.p13 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>e. Conocimiento de idiomas extranjeros</h3>
            </Grid>
            {/* P13 */}
            <Grid item xs={6}>
              <TextField 
              style={{ marginTop: 18}}
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p13', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr />
          {errors.p14 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>f. Recomendaciones / Referencias</h3>
            </Grid>
            {/* P14 */}
            <Grid item xs={6}>
              <TextField 
              style={{ marginTop: 18}}
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p14', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr />
          {errors.p15 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>g. Personalidad/ actitudes</h3>
            </Grid>
            {/* P15 */}
            <Grid item xs={6}>
              <TextField 
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p15', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr />
          {errors.p16 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>h. Capacidad de liderazgo</h3>
            </Grid>
            {/* P16 */}
            <Grid item xs={6}>
              <TextField 
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p16', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr />
          {errors.p17 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>i. Otra (especifique)</h3>
            </Grid>
            {/* P17 */}
            <Grid item xs={6}>
              <TextField 
              fullWidth 
              id="text"
              label='Escribe si o no'
              {...register('p17', {required: true})} 
              />
            </Grid>
          </Grid>
        </section>
        <section className="encuesta">
            <h1>II. COMPETENCIAS LABORALES.</h1>
        </section>
        <section className="encuesta">
            <h2>
                5.- En su opinión ¿qué competencias considera deben desarrollar los egresados de la 
                carrera de ingeniería bioquímica (IBQ), para desempeñarse eficientemente en sus 
                actividades laborales? Por favor evalúe conforme a la tabla siguiente:
            </h2>
            <hr style={{ marginTop: 20 }} />
            <h3>A. Habilidad para resolver conflictos.</h3>
            {/* P18 */}
            {errors.p18 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open18}
              onClose={handleClose18}
              onOpen={handleOpen18}
              label="Selecciona una opcion"
              onChange={handleChange18}
              {...register('p18', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>B. Ortografía y redacción de documentos</h3>
            {/* P19 */}
            {errors.p19 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open19}
              onClose={handleClose19}
              onOpen={handleOpen19}
              label="Selecciona una opcion"
              onChange={handleChange19}
              {...register('p19', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>C. Mejora de procesos</h3>
            {/* P20 */}
            {errors.p20 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open20}
              onClose={handleClose20}
              onOpen={handleOpen20}
              label="Selecciona una opcion"
              onChange={handleChange20}
              {...register('p20', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>D. Trabajo en equipo</h3>
            {/* P21 */}
            {errors.p21 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open21}
              onClose={handleClose21}
              onOpen={handleOpen21}
              label="Selecciona una opcion"
              onChange={handleChange21}
              {...register('p21', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>E. Habilidad para administrar tiempo</h3>
            {/* P22 */}
            {errors.p22 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open22}
              onClose={handleClose22}
              onOpen={handleOpen22}
              label="Selecciona una opcion"
              onChange={handleChange22}
              {...register('p22', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>F. Seguridad personal</h3>
            {/* P23 */}
            {errors.p23 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open23}
              onClose={handleClose23}
              onOpen={handleOpen23}
              label="Selecciona una opcion"
              onChange={handleChange23}
              {...register('p23', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>G. Facilidad de palabra</h3>
            {/* P24 */}
            {errors.p24 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open24}
              onClose={handleClose24}
              onOpen={handleOpen24}
              label="Selecciona una opcion"
              onChange={handleChange24}
              {...register('p24', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>H. Gestión de Proyectos</h3>
            {/* P25 */}
            {errors.p25 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open25}
              onClose={handleClose25}
              onOpen={handleOpen25}
              label="Selecciona una opcion"
              onChange={handleChange25}
              {...register('p25', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>I. Puntualidad y Asistencia</h3>
            {/* P26 */}
            {errors.p26 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open26}
              onClose={handleClose26}
              onOpen={handleOpen26}
              label="Selecciona una opcion"
              onChange={handleChange26}
              {...register('p26', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>J. Cumplimiento de las normas</h3>
            {/* P27 */}
            {errors.p27 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open27}
              onClose={handleClose27}
              onOpen={handleOpen27}
              label="Selecciona una opcion"
              onChange={handleChange27}
              {...register('p27', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>K. Integración al trabajo</h3>
            {/* P28 */}
            {errors.p28 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open28}
              onClose={handleClose28}
              onOpen={handleOpen28}
              label="Selecciona una opcion"
              onChange={handleChange28}
              {...register('p28', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>L. Creatividad e innovación</h3>
            {/* P29 */}
            {errors.p29 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open29}
              onClose={handleClose29}
              onOpen={handleOpen29}
              label="Selecciona una opcion"
              onChange={handleChange29}
              {...register('p29', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>M. Capacidad de negociación</h3>
            {/* P30 */}
            {errors.p30 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open30}
              onClose={handleClose30}
              onOpen={handleOpen30}
              label="Selecciona una opcion"
              onChange={handleChange30}
              {...register('p30', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>N. Capacidad de abstracción, análisis y síntesis</h3>
            {/* P31 */}
            {errors.p31 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open31}
              onClose={handleClose31}
              onOpen={handleOpen31}
              label="Selecciona una opcion"
              onChange={handleChange31}
              {...register('p31', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>O. Liderazgo y toma de decisiones</h3>
            {/* P32 */}
            {errors.p32 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open32}
              onClose={handleClose32}
              onOpen={handleOpen32}
              label="Selecciona una opcion"
              onChange={handleChange32}
              {...register('p32', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>P. Adaptación al cambio</h3>
            {/* P33 */}
            {errors.p33 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open33}
              onClose={handleClose33}
              onOpen={handleOpen33}
              label="Selecciona una opcion"
              onChange={handleChange33}
              {...register('p33', {required: true})} 
            >
              <MenuItem value="1 = poco">1 = poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 = mucho">5 = mucho</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
            <h1>III. OBJETIVOS EDUCACIONALES DEL EGRESADO.</h1>
        </section>
        <section className="encuesta">
            <h2>
                6.- En su opinión relacionadas con el desempeño de los egresados de la carrera de 
                ingeniería bioquímica (IBQ) y marque en la escala la calificación que usted 
                considere pertinente, donde 0 no cumple y 10 cumple al 100%.
            </h2>
            <hr style={{ marginTop: 20 }} />
            <h3>
                1. ¿Los egresados de la carrera de IBQ trabajan en equipos 
                multidisciplinarios y multiculturales con liderazgo, sentido crítico, 
                disposición al cambio y comprometidos con la calidad?
            </h3>
            {/* P34 */}
            {errors.p34 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open34}
              onClose={handleClose34}
              onOpen={handleOpen34}
              label="Selecciona una opcion"
              onChange={handleChange34}
              {...register('p34', {required: true})} 
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>
            2. ¿Los egresados de la carrera de IBQ diseñan, seleccionan, adaptan y escalan 
            equipos y procesos de manera sustentable aprovechando los recursos bióticos?
            </h3>
            {/* P35 */}
            {errors.p35 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open35}
              onClose={handleClose35}
              onOpen={handleOpen35}
              label="Selecciona una opcion"
              onChange={handleChange35}
              {...register('p35', {required: true})} 
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>
            3. ¿Identifican, previenen, controlan y dan solución a problemas de alta dirección 
            dentro de la práctica de la ingeniería bioquímica?
            </h3>
            {/* P36 */}
            {errors.p36 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open36}
              onClose={handleClose36}
              onOpen={handleOpen36}
              label="Selecciona una opcion"
              onChange={handleChange36}
              {...register('p36', {required: true})} 
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>
            4. ¿Identifican y aplican tecnologías emergentes relacionadas con el 
            campo de acción del Ingeniero Bioquímico?
            </h3>
            {/* P37 */}
            {errors.p37 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open37}
              onClose={handleClose37}
              onOpen={handleOpen37}
              label="Selecciona una opcion"
              onChange={handleChange37}
              {...register('p37', {required: true})} 
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>
            5. ¿Participan en el diseño y aplicación de normas y programas de gestión y aseguramiento 
            de la calidad, en empresas e instituciones del ámbito de la Ingeniería Bioquímica?
            </h3>
            {/* P38 */}
            {errors.p38 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open38}
              onClose={handleClose38}
              onOpen={handleOpen38}
              label="Selecciona una opcion"
              onChange={handleChange38}
              {...register('p38', {required: true})} 
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>
            6. ¿Formulan y evalúan proyectos de Ingeniería Bioquímica con criterios de Sustentabilidad?
            </h3>
            {/* P39 */}
            {errors.p39 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open39}
              onClose={handleClose39}
              onOpen={handleOpen39}
              label="Selecciona una opcion"
              onChange={handleChange39}
              {...register('p39', {required: true})} 
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>
            7. ¿Realizan investigación científica y tecnológica en el campo de la IBQ y difunden 
            sus resultados (SOLO SI APLICA)?
            </h3>
            {/* P40 */}
            {errors.p40 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open40}
              onClose={handleClose40}
              onOpen={handleOpen40}
              label="Selecciona una opcion"
              onChange={handleChange40}
              {...register('p40', {required: true})} 
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>
            8. ¿Crean, implementan y administran con sustentabilidad, 
            empresas de productos y servicios del ámbito de la IBQ?
            </h3>
            {/* P41 */}
            {errors.p41 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open41}
              onClose={handleClose41}
              onOpen={handleOpen41}
              label="Selecciona una opcion"
              onChange={handleChange41}
              {...register('p41', {required: true})} 
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
            <h1>IV. ATRIBUTOS DEL EGRESADO.</h1>
        </section>
        <section className="encuesta">
            <h3>
            1. ¿Analiza un sistema o proceso cumpliendo con las necesidades y requerimientos 
            presentados con ética y responsabilidad y los presenta como un diseño de proyecto 
            considerando limitaciones de tipo económico, sostenible, social y político?
            </h3>
            {/* P42 */}
            {errors.p42 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open42}
              onClose={handleClose42}
              onOpen={handleOpen42}
              label="Selecciona una opcion"
              onChange={handleChange42}
              {...register('p42', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
            <h3>
            2. ¿Puede identificar, formular y resolver problemas referentes al área de la 
            Ingeniería Bioquímica usando los conocimientos adquiridos en su formación profesional?
            </h3>
            {/* P43 */}
            {errors.p43 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open43}
              onClose={handleClose43}
              onOpen={handleOpen43}
              label="Selecciona una opcion"
              onChange={handleChange43}
              {...register('p43', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
          <h3>
          3. ¿Es capaz de planificar y administrar proyectos de ingeniería 
          con criterios de calidad, eficiencia y productividad?
            </h3>
            {/* P44 */}
            {errors.p44 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open44}
              onClose={handleClose44}
              onOpen={handleOpen44}
              label="Selecciona una opcion"
              onChange={handleChange44}
              {...register('p44', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
          <h3>
            4. ¿Puede realizar la simulación y modelación de sistemas y procesos para su 
            evaluación y optimización usando las tecnologías actuales?
            </h3>
            {/* P45 */}
            {errors.p45 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open45}
              onClose={handleClose45}
              onOpen={handleOpen45}
              label="Selecciona una opcion"
              onChange={handleChange45}
              {...register('p45', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
          <h3>
          5. ¿Realiza y conduce experimentos analizando e interpretando los resultados 
          obtenidos y formulando reportes técnico-científicos?
            </h3>
            {/* P46 */}
            {errors.p46 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open46}
              onClose={handleClose46}
              onOpen={handleOpen46}
              label="Selecciona una opcion"
              onChange={handleChange46}
              {...register('p46', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
          <h3>
          6. ¿Se actualiza de manera continua para estar a la vanguardia en el desarrollo de la 
          ciencia y la tecnología acorde a su formación profesional?
            </h3>
            {/* P47 */}
            {errors.p47 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open47}
              onClose={handleClose47}
              onOpen={handleOpen47}
              label="Selecciona una opcion"
              onChange={handleChange47}
              {...register('p47', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
          <h3>
          7. ¿Mantiene y promueve la comunicación efectiva con el personal que labora?
            </h3>
            {/* P48 */}
            {errors.p48 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open48}
              onClose={handleClose48}
              onOpen={handleOpen48}
              label="Selecciona una opcion"
              onChange={handleChange48}
              {...register('p48', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 20 }} />
          <h3>
          8. ¿Se integra de manera adecuada a los diferentes equipos de trabajo y propicia la 
          motivación y el reconocimiento de los logros obtenidos por los integrantes del equipo de 
          trabajo en la consecución de las metas?
            </h3>
            {/* P49 */}
            {errors.p49 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p8">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open49}
              onClose={handleClose49}
              onOpen={handleOpen49}
              label="Selecciona una opcion"
              onChange={handleChange49}
              {...register('p49', {required: true})} 
            >
              <MenuItem value="Completamente">Completamente</MenuItem>
              <MenuItem value="Medianamente">Medianamente</MenuItem>
              <MenuItem value="Ligeramente">Ligeramente</MenuItem>
              <MenuItem value="Ninguna relación">Ninguna relación</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
            <h1>V. OPINIÓN DEL EMPLEADOR.</h1>
        </section>
        <section className="encuesta">
            {/* P50 */}
            <h3>1. ¿Está satisfecho con los conocimientos, competencias y desempeño laboral del egresado?</h3>
            {errors.p50 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextareaAutosize
                style={{width: 630, height: 150}}
                id="p72"
                {...register('p50', {required: true})} 
            />
            {/* P51 */}
            <h3>
            2. ¿Qué valores considera que debe tener un egresado de la carrera para reforzar su desempeño 
            profesional? (Ejemplos: Igualdad, Disciplina, Actitud de servicio, Liderazgo, 
            Integridad, Compromiso, Respeto, Honradez, Lealtad, Gratitud, Responsabilidad, Honestidad, 
            Sencillez, Discreción, Solidaridad, Amistad, Tolerancia, Prudencia, equidad de género, 
            ético, aspectos financieros, integración familiar, responsabilidad civil, ecológico).
            </h3>
            {errors.p51 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextareaAutosize
                style={{width: 630, height: 150}}
                id="p72"
                {...register('p51', {required: true})} 
            />
            {/* P52 */}
            <h3>
            3. ¿Qué conocimientos y habilidades técnicas considera que debe tener un egresado de la 
            carrera para cumplir con sus funciones? (Ejemplos: Diseño y automatización de procesos, 
            mantenimiento y reparación de equipos, gestión de calidad, bio-fermentaciones, simulación 
            numérica, dibujo técnico, manejo de paqueterías de ofimática, resolución de problemas de 
            ingeniería, cálculo y diseño de equipos, relaciones interpersonales, administración, etc).
            </h3>
            {errors.p52 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextareaAutosize
                style={{width: 630, height: 150}}
                id="p72"
                {...register('p52', {required: true})} 
            />
            {/* P53 */}
            <h3>
            4. ¿Qué considera más importante para el desempeño laboral del egresado, 
            los conocimientos generales de la carrera o las habilidades técnicas?
            </h3>
            {errors.p53 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextareaAutosize
                style={{width: 630, height: 150}}
                id="p72"
                {...register('p53', {required: true})} 
            />
            {/* P54 */}
            <h3>
            5. ¿Considera importante el dominio del idioma ingles por parte de un recién egresado de esta carrera?
            </h3>
            {errors.p54 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextareaAutosize
                style={{width: 630, height: 150}}
                id="p72"
                {...register('p54', {required: true})} 
            />
            {/* P55 */}
            <h3>
            Comentarios (Si tiene algún comentario o sugerencia):
            </h3>
            {errors.p55 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextareaAutosize
                style={{width: 630, height: 150}}
                {...register('p55', {required: true})} 
            />
            {/* P56 */}
            {errors.p56 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
            <TextField
                margin="normal"
                style={{display: 'none'}}
                fullWidth
                value={user.usuario}
                label="Nombre comercial de la empresa"
                {...register('p56')} 
            />
        </section>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Enviar
            </Button>
        </form>
    </div>
  )
}

export default EncuestaEmpleador