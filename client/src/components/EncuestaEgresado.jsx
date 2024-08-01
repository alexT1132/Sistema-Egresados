import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEncuestEgresado } from "../context/EncuestEgresadoContext";
import { useNavigate } from "react-router-dom";

function EncuestaEgresado() {

  const navegation = useNavigate();

  const {user} = useAuth();

  const {createEncuestEgresado} = useEncuestEgresado();

  const {register, handleSubmit, formState: { errors }} = useForm();


  const onSubmit = handleSubmit((data) => {
    createEncuestEgresado(data);
    navegation("/egresado");
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

  const [P2, setP2] = React.useState("");
  const [open2, setOpen2] = React.useState(false);

  const handleChange2 = (event) => {
    setP2(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const [P3, setP3] = React.useState("");
  const [open3, setOpen3] = React.useState(false);

  const handleChange3 = (event) => {
    setP3(event.target.value);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const [P4, setP4] = React.useState("");
  const [open4, setOpen4] = React.useState(false);

  const handleChange4 = (event) => {
    setP4(event.target.value);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleOpen4 = () => {
    setOpen4(true);
  };

  const [P5, setP5] = React.useState("");
  const [open5, setOpen5] = React.useState(false);

  const handleChange5 = (event) => {
    setP5(event.target.value);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const handleOpen5 = () => {
    setOpen5(true);
  };

  const [P6, setP6] = React.useState("");
  const [open6, setOpen6] = React.useState(false);

  const handleChange6 = (event) => {
    setP6(event.target.value);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const handleOpen6 = () => {
    setOpen6(true);
  };

  const [P7, setP7] = React.useState("");
  const [open7, setOpen7] = React.useState(false);

  const handleChange7 = (event) => {
    setP7(event.target.value);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  const handleOpen7 = () => {
    setOpen7(true);
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

  const [P11, setP11] = React.useState("");
  const [open11, setOpen11] = React.useState(false);

  const handleChange11 = (event) => {
    setP11(event.target.value);
  };

  const handleClose11 = () => {
    setOpen11(false);
  };

  const handleOpen11 = () => {
    setOpen11(true);
  };

  const [P12, setP12] = React.useState("");
  const [open12, setOpen12] = React.useState(false);

  const handleChange12 = (event) => {
    setP12(event.target.value);
  };

  const handleClose12 = () => {
    setOpen12(false);
  };

  const handleOpen12 = () => {
    setOpen12(true);
  };

  const [P13, setP13] = React.useState("");
  const [open13, setOpen13] = React.useState(false);

  const handleChange13 = (event) => {
    setP13(event.target.value);
  };

  const handleClose13 = () => {
    setOpen13(false);
  };

  const handleOpen13 = () => {
    setOpen13(true);
  };

  const [P14, setP14] = React.useState("");
  const [open14, setOpen14] = React.useState(false);

  const handleChange14 = (event) => {
    setP14(event.target.value);
  };

  const handleClose14 = () => {
    setOpen14(false);
  };

  const handleOpen14 = () => {
    setOpen14(true);
  };

  const [P15, setP15] = React.useState("");
  const [open15, setOpen15] = React.useState(false);

  const handleChange15 = (event) => {
    setP15(event.target.value);
  };

  const handleClose15 = () => {
    setOpen15(false);
  };

  const handleOpen15 = () => {
    setOpen15(true);
  };

  const [P16, setP16] = React.useState("");
  const [open16, setOpen16] = React.useState(false);

  const handleChange16 = (event) => {
    setP16(event.target.value);
  };

  const handleClose16 = () => {
    setOpen16(false);
  };

  const handleOpen16 = () => {
    setOpen16(true);
  };

  const [P17, setP17] = React.useState("");
  const [open17, setOpen17] = React.useState(false);

  const handleChange17 = (event) => {
    setP17(event.target.value);
  };

  const handleClose17 = () => {
    setOpen17(false);
  };

  const handleOpen17 = () => {
    setOpen17(true);
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

  const [P51, setP51] = React.useState("");
  const [open51, setOpen51] = React.useState(false);

  const handleChange51 = (event) => {
    setP51(event.target.value);
  };

  const handleClose51 = () => {
    setOpen51(false);
  };

  const handleOpen51 = () => {
    setOpen51(true);
  };

  const [P53, setP53] = React.useState("");
  const [open53, setOpen53] = React.useState(false);

  const handleChange53 = (event) => {
    setP53(event.target.value);
  };

  const handleClose53 = () => {
    setOpen53(false);
  };

  const handleOpen53 = () => {
    setOpen53(true);
  };

  const [P55, setP55] = React.useState("");
  const [open55, setOpen55] = React.useState(false);

  const handleChange55 = (event) => {
    setP55(event.target.value);
  };

  const handleClose55 = () => {
    setOpen55(false);
  };

  const handleOpen55 = () => {
    setOpen55(true);
  };

  const [P57, setP57] = React.useState("");
  const [open57, setOpen57] = React.useState(false);

  const handleChange57 = (event) => {
    setP57(event.target.value);
  };

  const handleClose57 = () => {
    setOpen57(false);
  };

  const handleOpen57 = () => {
    setOpen57(true);
  };

  const [P58, setP58] = React.useState("");
  const [open58, setOpen58] = React.useState(false);

  const handleChange58 = (event) => {
    setP58(event.target.value);
  };

  const handleClose58 = () => {
    setOpen58(false);
  };

  const handleOpen58 = () => {
    setOpen58(true);
  };

  const [P59, setP59] = React.useState("");
  const [open59, setOpen59] = React.useState(false);

  const handleChange59 = (event) => {
    setP59(event.target.value);
  };

  const handleClose59 = () => {
    setOpen59(false);
  };

  const handleOpen59 = () => {
    setOpen59(true);
  };

  const [P60, setP60] = React.useState("");
  const [open60, setOpen60] = React.useState(false);

  const handleChange60 = (event) => {
    setP60(event.target.value);
  };

  const handleClose60 = () => {
    setOpen60(false);
  };

  const handleOpen60 = () => {
    setOpen60(true);
  };

  const [P61, setP61] = React.useState("");
  const [open61, setOpen61] = React.useState(false);

  const handleChange61 = (event) => {
    setP61(event.target.value);
  };

  const handleClose61 = () => {
    setOpen61(false);
  };

  const handleOpen61 = () => {
    setOpen61(true);
  };

  const [P62, setP62] = React.useState("");
  const [open62, setOpen62] = React.useState(false);

  const handleChange62 = (event) => {
    setP62(event.target.value);
  };

  const handleClose62 = () => {
    setOpen62(false);
  };

  const handleOpen62 = () => {
    setOpen62(true);
  };

  const [P63, setP63] = React.useState("");
  const [open63, setOpen63] = React.useState(false);

  const handleChange63 = (event) => {
    setP63(event.target.value);
  };

  const handleClose63 = () => {
    setOpen63(false);
  };

  const handleOpen63 = () => {
    setOpen63(true);
  };

  const [P64, setP64] = React.useState("");
  const [open64, setOpen64] = React.useState(false);

  const handleChange64 = (event) => {
    setP64(event.target.value);
  };

  const handleClose64 = () => {
    setOpen64(false);
  };

  const handleOpen64 = () => {
    setOpen64(true);
  };

  const [P65, setP65] = React.useState("");
  const [open65, setOpen65] = React.useState(false);

  const handleChange65 = (event) => {
    setP65(event.target.value);
  };

  const handleClose65 = () => {
    setOpen65(false);
  };

  const handleOpen65 = () => {
    setOpen65(true);
  };

  const [P66, setP66] = React.useState("");
  const [open66, setOpen66] = React.useState(false);

  const handleChange66 = (event) => {
    setP66(event.target.value);
  };

  const handleClose66 = () => {
    setOpen66(false);
  };

  const handleOpen66 = () => {
    setOpen66(true);
  };

  const [P67, setP67] = React.useState("");
  const [open67, setOpen67] = React.useState(false);

  const handleChange67 = (event) => {
    setP67(event.target.value);
  };

  const handleClose67 = () => {
    setOpen67(false);
  };

  const handleOpen67 = () => {
    setOpen67(true);
  };

  const [P68, setP68] = React.useState("");
  const [open68, setOpen68] = React.useState(false);

  const handleChange68 = (event) => {
    setP68(event.target.value);
  };

  const handleClose68 = () => {
    setOpen68(false);
  };

  const handleOpen68 = () => {
    setOpen68(true);
  };

  const [P69, setP69] = React.useState("");
  const [open69, setOpen69] = React.useState(false);

  const handleChange69 = (event) => {
    setP69(event.target.value);
  };

  const handleClose69 = () => {
    setOpen69(false);
  };

  const handleOpen69 = () => {
    setOpen69(true);
  };

  const [P70, setP70] = React.useState("");
  const [open70, setOpen70] = React.useState(false);

  const handleChange70 = (event) => {
    setP70(event.target.value);
  };

  const handleClose70 = () => {
    setOpen70(false);
  };

  const handleOpen70 = () => {
    setOpen70(true);
  };

  const [P71, setP71] = React.useState("");
  const [open71, setOpen71] = React.useState(false);

  const handleChange71 = (event) => {
    setP71(event.target.value);
  };

  const handleClose71 = () => {
    setOpen71(false);
  };

  const handleOpen71 = () => {
    setOpen71(true);
  };

  return (
    <div className="container-encuesta">
      <form onSubmit={onSubmit}>
        {/* P0 */}
        <section className="encuesta" id="p0">
        {errors.p0 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Nombre completo"
            {...register('p0', {required: true})} 
          />
        </section>
        <section className="encuesta">
          <h1>
            I.- PERTINENCIA Y DISPONIBILIDAD DE MEDIOS Y RECURSOS PARA EL
            APRENDIZAJE.
          </h1>
        </section>
        <section className="encuesta">
          {/* P1 */}
          <h3>1. Calidad de los docentes: </h3>
          {errors.p1 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p1">
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
              {...register('p1', {required: true})} 

            >
              <MenuItem value="Muy buena">Muy buena</MenuItem>
              <MenuItem value="Buena">Buena</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Mala">Mala</MenuItem>
            </Select>
          </FormControl>
          {/* P2 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Plan de Estudios: </h3>
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
              open={open2}
              onClose={handleClose2}
              onOpen={handleOpen2}
              label="Selecciona una opcion"
              onChange={handleChange2}
              {...register('p2', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy buena</MenuItem>
              <MenuItem value="Buena">Buena</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Mala">Mala</MenuItem>
            </Select>
          </FormControl>
          {/* P3 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            3. Oportunidad de participar en proyectos de investigación y
            desarrollo:
          </h3>
          {errors.p3 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p3">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open3}
              onClose={handleClose3}
              onOpen={handleOpen3}
              label="Selecciona una opcion"
              onChange={handleChange3}
              {...register('p3', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy buena</MenuItem>
              <MenuItem value="Buena">Buena</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Mala">Mala</MenuItem>
            </Select>
          </FormControl>
          {/* P4 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            4. Énfasis que se le prestaba a la investigación dentro del proceso
            de enseñanza:
          </h3>
          {errors.p4 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p4">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open4}
              onClose={handleClose4}
              onOpen={handleOpen4}
              label="Selecciona una opcion"
              onChange={handleChange4}
              {...register('p4', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy buena</MenuItem>
              <MenuItem value="Buena">Buena</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Mala">Mala</MenuItem>
            </Select>
          </FormControl>
          {/* P5 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            5. Satisfacción con las condiciones de estudio (infraestructura):
          </h3>
          {errors.p5 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p5">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open5}
              onClose={handleClose5}
              onOpen={handleOpen5}
              label="Selecciona una opcion"
              onChange={handleChange5}
              {...register('p5', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy buena</MenuItem>
              <MenuItem value="Buena">Buena</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Mala">Mala</MenuItem>
            </Select>
          </FormControl>
          {/* P6 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            6. Experiencia obtenida a través de la residencia profesional:
          </h3>
          {errors.p6 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p6">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open6}
              onClose={handleClose6}
              onOpen={handleOpen6}
              label="Selecciona una opcion"
              onChange={handleChange6}
              {...register('p6', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy buena</MenuItem>
              <MenuItem value="Buena">Buena</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Mala">Mala</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
          <h1>II. UBICACIÓN LABORAL DE LOS EGRESADOS.</h1>
        </section>
        <section className="encuesta">
          {/* P7 */}
          <h3>1. Actividad a la que se dedica actualmente:</h3>
          {errors.p7 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p7">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open7}
              onClose={handleClose7}
              onOpen={handleOpen7}
              label="Selecciona una opcion"
              onChange={handleChange7}
              {...register('p7', {required: true})} 
            >
              <MenuItem value="Trabaja">Trabaja</MenuItem>
              <MenuItem value="Estudia">Estudia</MenuItem>
              <MenuItem value="Trabaja y estudia">Trabaja y estudia</MenuItem>
              <MenuItem value="No estudia ni trabaja">
                No estudia ni trabaja
              </MenuItem>
            </Select>
          </FormControl>
          {/* P8 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Si estudia, indica si es:</h3>
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
              <MenuItem value="Especialidad">Especialidad</MenuItem>
              <MenuItem value="Maestria">Maestria</MenuItem>
              <MenuItem value="Doctorado">Doctorado</MenuItem>
              <MenuItem value="Idiomas">Idiomas</MenuItem>
              <MenuItem value="No estudia">No estudia</MenuItem>
            </Select>
          </FormControl>
          {/* P9 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Especialidad e Institución:</h3>
          {errors.p9 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text" 
          {...register('p9', {required: true})} 
          />
          {/* P10 */}
          <hr style={{ marginTop: 30 }} />
          <h3>4. Eres dueño o empleado en alguna empresa:</h3>
          {errors.p10 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text"
          {...register('p10', {required: true})} 
          />
          {/* P11 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            5. En caso de trabajar, tiempo transcurrido para conseguir el primer
            empleo:
          </h3>
          {errors.p11 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p11">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open11}
              onClose={handleClose11}
              onOpen={handleOpen11}
              label="Selecciona una opcion"
              onChange={handleChange11}
              {...register('p11', {required: true})} 
            >
              <MenuItem value="Antes de egresar">Antes de egresar</MenuItem>
              <MenuItem value="Menos de seis meses">
                Menos de seis meses
              </MenuItem>
              <MenuItem value="Entre seis meses y un año">
                Entre seis meses y un año
              </MenuItem>
              <MenuItem value="Mas de un año">Mas de un año</MenuItem>
            </Select>
          </FormControl>
          {/* P12 */}
          <hr style={{ marginTop: 30 }} />
          <h3>6. Medio para obtener el empleo:</h3>
          {errors.p12 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p12">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open12}
              onClose={handleClose12}
              onOpen={handleOpen12}
              label="Selecciona una opcion"
              onChange={handleChange12}
              {...register('p12', {required: true})} 
            >
              <MenuItem value="Bolsa de trabajo del plantel">
                Bolsa de trabajo del plantel
              </MenuItem>
              <MenuItem value="Contactos personales">
                Contactos personales
              </MenuItem>
              <MenuItem value="Residencia profecional">
                Residencia profecional
              </MenuItem>
              <MenuItem value="Medios masivos de comunicación">
                Medios masivos de comunicación
              </MenuItem>
              <MenuItem value="Otros">Otros</MenuItem>
            </Select>
          </FormControl>
          {/* P13 */}
          <hr style={{ marginTop: 30 }} />
          <h3>7. Requisitos de contratación:</h3>
          {errors.p13 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p13">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open13}
              onClose={handleClose13}
              onOpen={handleOpen13}
              label="Selecciona una opcion"
              onChange={handleChange13}
              {...register('p13', {required: true})} 
            >
              <MenuItem value="Competencias laborales">
                Competencias laborales
              </MenuItem>
              <MenuItem value="Título profesional">Título profesional</MenuItem>
              <MenuItem value="Examen de selección">
                Examen de selección
              </MenuItem>
              <MenuItem value="Idioma extranjero">Idioma extranjero</MenuItem>
              <MenuItem value="Actitudes y habilidades socio-comunicativas (principios y valores)">
                Actitudes y habilidades socio-comunicativas (principios y
                valores)
              </MenuItem>
              <MenuItem value="Ninguno">Ninguno</MenuItem>
            </Select>
          </FormControl>
          {/* P14 */}
          <hr style={{ marginTop: 30 }} />
          <h3>8. Antigüedad en el empleo:</h3>
          {errors.p14 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p14">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open14}
              onClose={handleClose14}
              onOpen={handleOpen14}
              label="Selecciona una opcion"
              onChange={handleChange14}
              {...register('p14', {required: true})} 
            >
              <MenuItem value="Menos de un año">Menos de un año</MenuItem>
              <MenuItem value="Un año">Un año</MenuItem>
              <MenuItem value="Dos años">Dos años</MenuItem>
              <MenuItem value="Tres años">Tres años</MenuItem>
              <MenuItem value="Mas de tres años">Mas de tres años</MenuItem>
            </Select>
          </FormControl>
          {/* P15 */}
          <hr style={{ marginTop: 30 }} />
          <h3>9. Nivel jerárquico en el trabajo:</h3>
          {errors.p15 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p15">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open15}
              onClose={handleClose15}
              onOpen={handleOpen15}
              label="Selecciona una opcion"
              onChange={handleChange15}
              {...register('p15', {required: true})} 
            >
              <MenuItem value="Técnico">Técnico</MenuItem>
              <MenuItem value="Superior">Superior</MenuItem>
              <MenuItem value="Jefe de área">Jefe de área</MenuItem>
              <MenuItem value="Funcionario">Funcionario</MenuItem>
              <MenuItem value="Directivo">Directivo</MenuItem>
              <MenuItem value="Empresario">Empresario</MenuItem>
            </Select>
          </FormControl>
          {/* P16 */}
          <hr style={{ marginTop: 30 }} />
          <h3>10. Condición de trabajo:</h3>
          {errors.p16 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p16">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open16}
              onClose={handleClose16}
              onOpen={handleOpen16}
              label="Selecciona una opcion"
              onChange={handleChange16}
              {...register('p16', {required: true})} 
            >
              <MenuItem value="Base">Base</MenuItem>
              <MenuItem value="Eventual">Eventual</MenuItem>
              <MenuItem value="Contrato">Contrato</MenuItem>
              <MenuItem value="Otro">Otro</MenuItem>
            </Select>
          </FormControl>
          {/* P17 */}
          <hr style={{ marginTop: 30 }} />
          <h3>11. Relación del trabajo con su área de formación:</h3>
          {errors.p17 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p17">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open17}
              onClose={handleClose17}
              onOpen={handleOpen17}
              label="Selecciona una opcion"
              onChange={handleChange17}
              {...register('p17', {required: true})} 
            >
              <MenuItem value="0%">0%</MenuItem>
              <MenuItem value="20%">20%</MenuItem>
              <MenuItem value="40%">40%</MenuItem>
              <MenuItem value="60%">60%</MenuItem>
              <MenuItem value="80%">80%</MenuItem>
              <MenuItem value="100%">100%</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
          <h1>III. DATOS DE LA EMPRESA U ORGANISMO.</h1>
        </section>
        <section className="encuesta">
          {/* P18 */}
          <h3>1. Organismo:</h3>
          {errors.p18 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p18">
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
              <MenuItem value="Público">Público</MenuItem>
              <MenuItem value="Privado">Privado</MenuItem>
              <MenuItem value="Social">Social</MenuItem>
            </Select>
          </FormControl>
          {/* P19 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Giro o actividad principal de la empresa u organismo:</h3>
          {errors.p19 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text"
          {...register('p19', {required: true})} 
          />
          {/* P20 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Razón Social:</h3>
          {errors.p20 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text" 
          {...register('p20', {required: true})} 
          />
          {/* P21 */}
          <hr style={{ marginTop: 30 }} />
          <h3>4. Domicilio:</h3>
          {errors.p21 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text" 
          {...register('p21', {required: true})} 
          />
          {/* P22 */}
          <hr style={{ marginTop: 30 }} />
          <h3>5. Ciudad:</h3>
          {errors.p22 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text" 
          {...register('p22', {required: true})} 
          />
          {/* P23 */}
          <hr style={{ marginTop: 30 }} />
          <h3>6. Municipio:</h3>
          {errors.p23 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text"
          {...register('p23', {required: true})} 
          />
          {/* P24 */}
          <hr style={{ marginTop: 30 }} />
          <h3>7. Estado:</h3>
          {errors.p24 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text" 
          {...register('p24', {required: true})} 
          />
          {/* P25 */}
          <hr style={{ marginTop: 30 }} />
          <h3>8. Teléfono:</h3>
          {errors.p25 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text" 
          {...register('p25', {required: true})} 
          />
          {/* P26 */}
          <hr style={{ marginTop: 30 }} />
          <h3>9. Pagina web:</h3>
          {errors.p26 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text" 
          {...register('p26', {required: true})} 
          />
          {/* P27 */}
          <hr style={{ marginTop: 30 }} />
          <h3>10. Nombre y puesto del jefe inmediato:</h3>
          {errors.p27 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text" 
          {...register('p27', {required: true})} 
          />
        </section>
        <section className="encuesta">
          <h1>IV. SECTOR ECONÓMICO DE LA EMPRESA U ORGANIZACIÓN.</h1>
        </section>
        <section className="encuesta">
          {/* P28 */}
          <h3>1. Sector primario:</h3>
          {errors.p28 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p28">
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
              <MenuItem value="Agroindustria">Agroindustria</MenuItem>
              <MenuItem value="Pesquero">Pesquero</MenuItem>
              <MenuItem value="Minero">Minero</MenuItem>
              <MenuItem value="Otros">Otros</MenuItem>
            </Select>
          </FormControl>
          {/* P29 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Sector secundario:</h3>
          {errors.p29 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p30">
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
              <MenuItem value="Industrial">Industrial</MenuItem>
              <MenuItem value="Construcción">Construcción</MenuItem>
              <MenuItem value="Petrolero">Petrolero</MenuItem>
              <MenuItem value="Otros">Otros</MenuItem>
            </Select>
          </FormControl>
          {/* P30 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Sector terciario:</h3>
          {errors.p30 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p31">
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
              <MenuItem value="Educativo">Educativo</MenuItem>
              <MenuItem value="Turismo">Turismo</MenuItem>
              <MenuItem value="Comercio">Comercio</MenuItem>
              <MenuItem value="Servicios financieros">
                Servicios financieros
              </MenuItem>
              <MenuItem value="Otros">Otros</MenuItem>
            </Select>
          </FormControl>
          {/* P31 */}
          <hr style={{ marginTop: 30 }} />
          <h3>4. Si es en el sector educativo:</h3>
          {errors.p31 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p31">
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
              <MenuItem value="Privado">Privado</MenuItem>
              <MenuItem value="Público">Público</MenuItem>
              <MenuItem value="Otro">Otro</MenuItem>
            </Select>
          </FormControl>
          {/* P32 */}
          <hr style={{ marginTop: 30 }} />
          <h3>5. Tamaño de la empresa u organización:</h3>
          {errors.p32 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p32">
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
              <MenuItem value="Microempresa (1-30)">
                Microempresa (1-30)
              </MenuItem>
              <MenuItem value="Pequeña (31-100)">Pequeña (31-100)</MenuItem>
              <MenuItem value="Mediana (101-500)">Mediana (101-500)</MenuItem>
              <MenuItem value="Grande (mas de 500)">
                Grande (mas de 500)
              </MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
          <h1>V. Desempeño profesional de los egresados.</h1>
        </section>
        <section className="encuesta">
          {/* P33 */}
          <h3>
            1. Eficiencia para realizar las actividades laborales, en relación
            con su formación académica:
          </h3>
          {errors.p33 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p34">
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
              <MenuItem value="Muy eficiente">Muy eficiente</MenuItem>
              <MenuItem value="Eficiente">Eficiente</MenuItem>
              <MenuItem value="Poco eficiente">Poco eficiente</MenuItem>
              <MenuItem value="Deficiente">Deficiente</MenuItem>
            </Select>
          </FormControl>
          {/* P34 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            2. Cómo califica su formación académica con respecto a su desempeño
            laboral:
          </h3>
          {errors.p34 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p34">
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
              <MenuItem value="Excelente">Excelente</MenuItem>
              <MenuItem value="Bueno">Bueno</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Malo">Malo</MenuItem>
              <MenuItem value="Pésimo">Pésimo</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
          <h1>
            VI. ASPECTOS QUE VALORA LA EMPRESA U ORGANISMO PARA LA CONTRATACIÓN
            DE EGRESADOS.
          </h1>
        </section>
        <section className="encuesta">
          {/* P35 */}
          <h3>1. Área o Campo de Estudio:</h3>
          {errors.p35 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p35">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P36 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Titulación:</h3>
          {errors.p36 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p36">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P37 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Experiencia Laboral/práctica (antes de egresar):</h3>
          {errors.p37 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p37">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P38 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            4. Competencia Laboral: Habilidad para resolver problemas, capacidad
            de análisis, habilidad para el aprendizaje, creatividad,
            administración del tiempo, capacidad de negociación, habilidades
            manuales, trabajo en equipo, iniciativa, honestidad, persistencia,
            etc.
          </h3>
          {errors.p38 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p38">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P39 */}
          <hr style={{ marginTop: 30 }} />
          <h3>5. Posicionamiento de la institución de egreso:</h3>
          {errors.p39 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p39">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P40 */}
          <hr style={{ marginTop: 30 }} />
          <h3>6. Conocimiento de idiomas extranjeros:</h3>
          {errors.p40 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p40">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P41 */}
          <hr style={{ marginTop: 30 }} />
          <h3>7. Recomendaciones / referencias:</h3>
          {errors.p41 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p41">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P42 */}
          <hr style={{ marginTop: 30 }} />
          <h3>8. Personalidad / actitudes:</h3>
          {errors.p42 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p42">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P43 */}
          <hr style={{ marginTop: 30 }} />
          <h3>9. Capacidad de liderazgo:</h3>
          {errors.p43 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p43">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
          {/* P44 */}
          <hr style={{ marginTop: 30 }} />
          <h3>10. Otros:</h3>
          {errors.p44 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p44">
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
              <MenuItem value="1">1 = Poco</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5 = Mucho</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
          <h1>
            VII. EXPECTATIVAS DE DESARROLLO, SUPERACIÓN PROFESIONAL Y DE
            ACTUALIZACIÓN.
          </h1>
        </section>
        <section className="encuesta">
          {/* P45 */}
          <h3 style={{ textAlign: "center" }}>
            Actualización de conocimientos.
          </h3>
          <hr style={{ marginTop: 30 }} />
          <h3>1. Área o Campo de Estudio.</h3>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
            {errors.p45 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <FormControl sx={{ width: "100%" }} size="medium">
                <InputLabel id="demo-controlled-open-select-label">
                  Selecciona una opción
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open45}
                  onClose={handleClose45}
                  onOpen={handleOpen45}
                  label="Selecciona una opción"
                  onChange={handleChange45}
                  {...register('p45', {required: true})} 
                >
                  <MenuItem value="Si">Si</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* P46 */}
            <Grid item xs={7}>
            {errors.p46 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              label='¿Cuales?'
              {...register('p46', {required: true})} 
              />
            </Grid>
          </Grid>
          {/* P47 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Le gustaría tomar algún Posgrado.</h3>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
            {errors.p47 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <FormControl sx={{ width: "100%" }} size="medium">
                <InputLabel id="demo-controlled-open-select-label">
                  Selecciona una opción
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open47}
                  onClose={handleClose47}
                  onOpen={handleOpen47}
                  label="Selecciona una opción"
                  onChange={handleChange47}
                  {...register('p47', {required: true})} 
                >
                  <MenuItem value="Si">Si</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* P48 */}
            <Grid item xs={7}>
            {errors.p48 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              label='¿Cuales?'
              {...register('p48', {required: true})} 
              />
            </Grid>
          </Grid>
          {/* P49 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Ha participado en Congresos, Simposio y Talleres?</h3>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
            {errors.p49 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <FormControl sx={{ width: "100%" }} size="medium">
                <InputLabel id="demo-controlled-open-select-label">
                  Selecciona una opción
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open49}
                  onClose={handleClose49}
                  onOpen={handleOpen49}
                  label="Selecciona una opción"
                  onChange={handleChange49}
                  {...register('p49', {required: true})} 
                >
                  <MenuItem value="Si">Si</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* P50 */}
            <Grid item xs={7}>
            {errors.p50 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              label='¿Cuales?'
              {...register('p50', {required: true})} 
              />
            </Grid>
          </Grid>
          <hr style={{ marginTop: 30 }} />
          <h3 style={{textAlign: 'center'}}>Participación social de los egresados</h3>
          {/* P51 */}
          <hr style={{ marginTop: 30 }} />
          <h3>1. Pertenece a organizaciones sociales</h3>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
            {errors.p51 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <FormControl sx={{ width: "100%" }} size="medium">
                <InputLabel id="demo-controlled-open-select-label">
                  Selecciona una opción
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open51}
                  onClose={handleClose51}
                  onOpen={handleOpen51}
                  label="Selecciona una opción"
                  onChange={handleChange51}
                  {...register('p51', {required: true})} 
                >
                  <MenuItem value="Si">Si</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* P52 */}
            <Grid item xs={7}>
            {errors.p52 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              label='¿Cuales?'
              {...register('p52', {required: true})} 
              />
            </Grid>
          </Grid>
          {/* P53 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Pertenece a organismos de profesionistas:</h3>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
            {errors.p53 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <FormControl sx={{ width: "100%" }} size="medium">
                <InputLabel id="demo-controlled-open-select-label">
                  Selecciona una opción
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open53}
                  onClose={handleClose53}
                  onOpen={handleOpen53}
                  label="Selecciona una opción"
                  onChange={handleChange53}
                  {...register('p53', {required: true})} 
                >
                  <MenuItem value="Si">Si</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* P54 */}
            <Grid item xs={7}>
            {errors.p54 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              label='¿Cuales?'
              {...register('p54', {required: true})} 
              />
            </Grid>
          </Grid>
          {/* P55 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Pertenece a la asociación de egresados:</h3>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
            {errors.p55 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <FormControl sx={{ width: "100%" }} size="medium">
                <InputLabel id="demo-controlled-open-select-label">
                  Selecciona una opción
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open55}
                  onClose={handleClose55}
                  onOpen={handleOpen55}
                  label="Selecciona una opción"
                  onChange={handleChange55}
                  {...register('p55', {required: true})} 
                >
                  <MenuItem value="Si">Si</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* P56 */}
            <Grid item xs={7}>
            {errors.p56 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              label='¿Cuales?'
              {...register('p56', {required: true})} 
              />
            </Grid>
          </Grid>
        </section>
        <section className="encuesta">
          <h1>
            VIII. RELEVANCIA DE LOS OBJETIVOS EDUCACIONALES.
          </h1>
        </section>
        <section className="encuesta">
          <h3 style={{ textAlign: "center" }}>
          Indique qué tan relevantes le resultan los objetivos educacionales
            que le mostramos a continuación para lograr alcanzar el éxito en su desempeño laboral:
          </h3>
          <hr style={{ marginTop: 30 }} />
          <h5>
          NOTA: Objetivos educacionales son los logros esperados de los egresados de Ingeniería Bioquímica
          </h5>
          <hr style={{ marginTop: 30 }} />
            {/* P57 */}
            <h3>1. Trabajan en equipos multidisciplinarios y multiculturales con liderazgo,
                 sentido crítico, disposición al cambio y comprometidos con la calidad, diseñan,
                  seleccionan, adaptan y escalan equipos y procesos en los que se aprovechen de manera
                   sustentable los recursos bióticos
            </h3>
            {errors.p57 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p57">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open57}
              onClose={handleClose57}
              onOpen={handleOpen57}
              label="Selecciona una opcion"
              onChange={handleChange57}
              {...register('p57', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy Relevante</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Poco relevante">Poco relevante</MenuItem>
              <MenuItem value="Nada relevante">Nada relevante</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P58 */}
          <h3>
            2. Identifican, previenen, controlan y dan solución a 
            problemas de alta dirección dentro de la práctica de la ingeniería bioquímica
          </h3>
          {errors.p58 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p58">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open58}
              onClose={handleClose58}
              onOpen={handleOpen58}
              label="Selecciona una opcion"
              onChange={handleChange58}
              {...register('p58', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy Relevante</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Poco relevante">Poco relevante</MenuItem>
              <MenuItem value="Nada relevante">Nada relevante</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P59 */}
          <h3>
          3. Identifican y aplican tecnologías emergentes relacionadas con el campo de acción del Ingeniero Bioquímico
          </h3>
          {errors.p59 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p59">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open59}
              onClose={handleClose59}
              onOpen={handleOpen59}
              label="Selecciona una opcion"
              onChange={handleChange59}
              {...register('p59', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy Relevante</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Poco relevante">Poco relevante</MenuItem>
              <MenuItem value="Nada relevante">Nada relevante</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P60 */}
          <h3>
          3. Identifican y aplican tecnologías emergentes relacionadas con el campo de acción del Ingeniero Bioquímico
          </h3>
          {errors.p60 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p60">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open60}
              onClose={handleClose60}
              onOpen={handleOpen60}
              label="Selecciona una opcion"
              onChange={handleChange60}
              {...register('p60', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy Relevante</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Poco relevante">Poco relevante</MenuItem>
              <MenuItem value="Nada relevante">Nada relevante</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P61 */}
          <h3>
          4. Participan en el diseño y aplicación de normas y programas
           de gestión y aseguramiento de la calidad en empresas e instituciones del ámbito de la 
           Ingeniería Bioquímica
          </h3>
          {errors.p61 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p61">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open61}
              onClose={handleClose61}
              onOpen={handleOpen61}
              label="Selecciona una opcion"
              onChange={handleChange61}
              {...register('p61', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy Relevante</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Poco relevante">Poco relevante</MenuItem>
              <MenuItem value="Nada relevante">Nada relevante</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P62 */}
          <h3>
          5. Formulan y evalúan proyectos de Ingeniería Bioquímica con criterios de sustentabilidad
          </h3>
          {errors.p62 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p62">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open62}
              onClose={handleClose62}
              onOpen={handleOpen62}
              label="Selecciona una opcion"
              onChange={handleChange62}
              {...register('p62', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy Relevante</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Poco relevante">Poco relevante</MenuItem>
              <MenuItem value="Nada relevante">Nada relevante</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P63 */}
          <h3>
          6. Realizan investigación
           científica y tecnológica en el campo de la Ingeniería Bioquímica y difunden sus resultados
          </h3>
          {errors.p63 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p63">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open63}
              onClose={handleClose63}
              onOpen={handleOpen63}
              label="Selecciona una opcion"
              onChange={handleChange63}
              {...register('p63', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy Relevante</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Poco relevante">Poco relevante</MenuItem>
              <MenuItem value="Nada relevante">Nada relevante</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P64 */}
          <h3>
          7. Crean, implementan y administran con sustentabilidad empresas
          de productos y servicios del ámbito de la Ingeniería Bioquímica.
          </h3>
          {errors.p64 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p64">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open64}
              onClose={handleClose64}
              onOpen={handleOpen64}
              label="Selecciona una opcion"
              onChange={handleChange64}
              {...register('p64', {required: true})} 
            >
              <MenuItem value="Muy buena">Muy Relevante</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Poco relevante">Poco relevante</MenuItem>
              <MenuItem value="Nada relevante">Nada relevante</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
          <h1>
            IX. EVALUACIÓN DE LOS ATRIBUTOS DE LOS EGRESADOS.
          </h1>
        </section>
        <section className="encuesta">
            {/* P65 */}
          <h3>
          1. Resolver problemas de Ingeniería
          </h3>
          {errors.p65 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p65">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open65}
              onClose={handleClose65}
              onOpen={handleOpen65}
              label="Selecciona una opcion"
              onChange={handleChange65}
              {...register('p65', {required: true})} 
            >
              <MenuItem value="Introductorio">Introductorio</MenuItem>
              <MenuItem value="Medio">Medio</MenuItem>
              <MenuItem value="Avanzado">Avanzado</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P66 */}
          <h3>
          2. Realizar procesos adecuados de diseño de Ingeniería
          </h3>
          {errors.p66 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p66">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open66}
              onClose={handleClose66}
              onOpen={handleOpen66}
              label="Selecciona una opcion"
              onChange={handleChange66}
              {...register('p66', {required: true})} 
            >
              <MenuItem value="Introductorio">Introductorio</MenuItem>
              <MenuItem value="Medio">Medio</MenuItem>
              <MenuItem value="Avanzado">Avanzado</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P67 */}
          <h3>
          3. Realizar experimentación adecuada
          </h3>
          {errors.p67 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p67">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open67}
              onClose={handleClose67}
              onOpen={handleOpen67}
              label="Selecciona una opcion"
              onChange={handleChange67}
              {...register('p67', {required: true})} 
            >
              <MenuItem value="Introductorio">Introductorio</MenuItem>
              <MenuItem value="Medio">Medio</MenuItem>
              <MenuItem value="Avanzado">Avanzado</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P68 */}
          <h3>
          4. Comunicarse efectivamente
          </h3>
          {errors.p68 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p68">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open68}
              onClose={handleClose68}
              onOpen={handleOpen68}
              label="Selecciona una opcion"
              onChange={handleChange68}
              {...register('p68', {required: true})} 
            >
              <MenuItem value="Introductorio">Introductorio</MenuItem>
              <MenuItem value="Medio">Medio</MenuItem>
              <MenuItem value="Avanzado">Avanzado</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P69 */}
          <h3>
          5. Reconocer sus responsabilidades éticas y profesionales
          </h3>
          {errors.p69 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p69">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open69}
              onClose={handleClose69}
              onOpen={handleOpen69}
              label="Selecciona una opcion"
              onChange={handleChange69}
              {...register('p69', {required: true})} 
            >
              <MenuItem value="Introductorio">Introductorio</MenuItem>
              <MenuItem value="Medio">Medio</MenuItem>
              <MenuItem value="Avanzado">Avanzado</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P70 */}
          <h3>
          6. Actualizarse permanentemente
          </h3>
          {errors.p70 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p70">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open70}
              onClose={handleClose70}
              onOpen={handleOpen70}
              label="Selecciona una opcion"
              onChange={handleChange70}
              {...register('p70', {required: true})} 
            >
              <MenuItem value="Introductorio">Introductorio</MenuItem>
              <MenuItem value="Medio">Medio</MenuItem>
              <MenuItem value="Avanzado">Avanzado</MenuItem>
            </Select>
          </FormControl>
          <hr style={{ marginTop: 30 }} />
          {/* P71 */}
          <h3>
          7. Trabajar en equipo
          </h3>
          {errors.p71 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <FormControl sx={{ width: "100%" }} size="medium" id="p71">
            <InputLabel id="demo-controlled-open-select-label">
              Selecciona una opción
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open71}
              onClose={handleClose71}
              onOpen={handleOpen71}
              label="Selecciona una opcion"
              onChange={handleChange71}
              {...register('p71', {required: true})} 
            >
              <MenuItem value="Introductorio">Introductorio</MenuItem>
              <MenuItem value="Medio">Medio</MenuItem>
              <MenuItem value="Avanzado">Avanzado</MenuItem>
            </Select>
          </FormControl>
        </section>
        <section className="encuesta">
          <h1>
            X. COMENTARIOS Y SUGERENCIAS.
          </h1>
        </section>
        <section className="encuesta">
            {/* P72 y P73 */}
            <h3>Opinión o recomendación para mejorar la formación profesional
                 de un egresado de su carrera</h3>
                 {errors.p72 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
                 <TextareaAutosize
                    style={{width: 630, height: 200}}
                    id="p72"
                    {...register('p72', {required: true})} 
                 />
                 <TextField 
                 id="p73"
                 style={{display: 'none'}}
                 value={user.usuario}
                 fullWidth
                 {...register('p73')} 
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
  );
}

export default EncuestaEgresado;
