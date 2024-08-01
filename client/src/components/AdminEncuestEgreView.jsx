import React, {useEffect} from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEncuestEgresado } from "../context/EncuestEgresadoContext";

function EncuestaEgresado() {

    const params = useParams();

  const {getEncuestaEgre} = useEncuestEgresado();

  const {register, setValue, formState: { errors }} = useForm();

  useEffect(() => {
    async function loadEncuestEgre() {
        if (params.id){
            const encuestaEgre = await getEncuestaEgre(params.id);
            setValue('p0', encuestaEgre.p0);
            setValue('p1', encuestaEgre.p1);
            setValue('p2', encuestaEgre.p2);
            setValue('p3', encuestaEgre.p3);
            setValue('p4', encuestaEgre.p4);
            setValue('p5', encuestaEgre.p5);
            setValue('p6', encuestaEgre.p6);
            setValue('p7', encuestaEgre.p7);
            setValue('p8', encuestaEgre.p8);
            setValue('p9', encuestaEgre.p9);
            setValue('p10', encuestaEgre.p10);
            setValue('p11', encuestaEgre.p11);
            setValue('p12', encuestaEgre.p12);
            setValue('p13', encuestaEgre.p13);
            setValue('p14', encuestaEgre.p14);
            setValue('p15', encuestaEgre.p15);
            setValue('p16', encuestaEgre.p16);
            setValue('p17', encuestaEgre.p17);
            setValue('p18', encuestaEgre.p18);
            setValue('p19', encuestaEgre.p19);
            setValue('p20', encuestaEgre.p20);
            setValue('p21', encuestaEgre.p21);
            setValue('p22', encuestaEgre.p22);
            setValue('p23', encuestaEgre.p23);
            setValue('p24', encuestaEgre.p24);
            setValue('p25', encuestaEgre.p25);
            setValue('p26', encuestaEgre.p26);
            setValue('p27', encuestaEgre.p27);
            setValue('p28', encuestaEgre.p28);
            setValue('p29', encuestaEgre.p29);
            setValue('p30', encuestaEgre.p30);
            setValue('p31', encuestaEgre.p31);
            setValue('p32', encuestaEgre.p32);
            setValue('p33', encuestaEgre.p33);
            setValue('p34', encuestaEgre.p34);
            setValue('p35', encuestaEgre.p35);
            setValue('p36', encuestaEgre.p36);
            setValue('p37', encuestaEgre.p37);
            setValue('p38', encuestaEgre.p38);
            setValue('p39', encuestaEgre.p39);
            setValue('p40', encuestaEgre.p40);
            setValue('p41', encuestaEgre.p41);
            setValue('p42', encuestaEgre.p42);
            setValue('p43', encuestaEgre.p43);
            setValue('p44', encuestaEgre.p44);
            setValue('p45', encuestaEgre.p45);
            setValue('p46', encuestaEgre.p46);
            setValue('p47', encuestaEgre.p47);
            setValue('p48', encuestaEgre.p48);
            setValue('p49', encuestaEgre.p49);
            setValue('p50', encuestaEgre.p50);
            setValue('p51', encuestaEgre.p51);
            setValue('p52', encuestaEgre.p52);
            setValue('p53', encuestaEgre.p53);
            setValue('p54', encuestaEgre.p54);
            setValue('p55', encuestaEgre.p55);
            setValue('p56', encuestaEgre.p56);
            setValue('p57', encuestaEgre.p57);
            setValue('p58', encuestaEgre.p58);
            setValue('p59', encuestaEgre.p59);
            setValue('p60', encuestaEgre.p60);
            setValue('p61', encuestaEgre.p61);
            setValue('p62', encuestaEgre.p62);
            setValue('p63', encuestaEgre.p63);
            setValue('p64', encuestaEgre.p64);
            setValue('p65', encuestaEgre.p65);
            setValue('p66', encuestaEgre.p66);
            setValue('p67', encuestaEgre.p67);
            setValue('p68', encuestaEgre.p68);
            setValue('p69', encuestaEgre.p69);
            setValue('p70', encuestaEgre.p70);
            setValue('p71', encuestaEgre.p71);
            setValue('p72', encuestaEgre.p72);
        }
    }
    loadEncuestEgre();
  }, []);

  return (
    <div className="container-encuesta">
      <form>
        {/* P0 */}
        <section className="encuesta" id="p0">
        {errors.p0 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Nombre completo</p>
          <TextField
            fullWidth
            id="text"
            disabled
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p1', {required: true})} 
          />
          {/* P2 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Plan de Estudios: </h3>
          {errors.p2 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p2', {required: true})} 
          />
          {/* P3 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            3. Oportunidad de participar en proyectos de investigación y
            desarrollo:
          </h3>
          {errors.p3 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p3', {required: true})} 
          />
          {/* P4 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            4. Énfasis que se le prestaba a la investigación dentro del proceso
            de enseñanza:
          </h3>
          {errors.p4 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p4', {required: true})} 
          />
          {/* P5 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            5. Satisfacción con las condiciones de estudio (infraestructura):
          </h3>
          {errors.p5 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p5', {required: true})} 
          />
          {/* P6 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            6. Experiencia obtenida a través de la residencia profesional:
          </h3>
          {errors.p6 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p6', {required: true})} 
          />
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p7', {required: true})} 
          />
          {/* P8 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Si estudia, indica si es:</h3>
          {errors.p8 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p8', {required: true})} 
          />
          {/* P9 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Especialidad e Institución:</h3>
          {errors.p9 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text"
          disabled 
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
          disabled
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p11', {required: true})} 
          />
          {/* P12 */}
          <hr style={{ marginTop: 30 }} />
          <h3>6. Medio para obtener el empleo:</h3>
          {errors.p12 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p12', {required: true})} 
          />
          {/* P13 */}
          <hr style={{ marginTop: 30 }} />
          <h3>7. Requisitos de contratación:</h3>
          {errors.p13 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p13', {required: true})} 
          />
          {/* P14 */}
          <hr style={{ marginTop: 30 }} />
          <h3>8. Antigüedad en el empleo:</h3>
          {errors.p14 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p14', {required: true})} 
          />
          {/* P15 */}
          <hr style={{ marginTop: 30 }} />
          <h3>9. Nivel jerárquico en el trabajo:</h3>
          {errors.p15 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p15', {required: true})} 
          />
          {/* P16 */}
          <hr style={{ marginTop: 30 }} />
          <h3>10. Condición de trabajo:</h3>
          {errors.p16 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p16', {required: true})} 
          />
          {/* P17 */}
          <hr style={{ marginTop: 30 }} />
          <h3>11. Relación del trabajo con su área de formación:</h3>
          {errors.p17 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p17', {required: true})} 
          />
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p18', {required: true})} 
          />
          {/* P19 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Giro o actividad principal de la empresa u organismo:</h3>
          {errors.p19 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField 
          fullWidth 
          id="text"
          disabled
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
          disabled 
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
          disabled 
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
          disabled 
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
          disabled
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
          disabled 
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
          disabled 
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
          disabled 
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
          disabled 
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p28', {required: true})} 
          />
          {/* P29 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Sector secundario:</h3>
          {errors.p29 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p29', {required: true})} 
          />
          {/* P30 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Sector terciario:</h3>
          {errors.p30 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p30', {required: true})} 
          />
          {/* P31 */}
          <hr style={{ marginTop: 30 }} />
          <h3>4. Si es en el sector educativo:</h3>
          {errors.p31 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p31', {required: true})} 
          />
          {/* P32 */}
          <hr style={{ marginTop: 30 }} />
          <h3>5. Tamaño de la empresa u organización:</h3>
          {errors.p32 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p32', {required: true})} 
          />
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p33', {required: true})} 
          />
          {/* P34 */}
          <hr style={{ marginTop: 30 }} />
          <h3>
            2. Cómo califica su formación académica con respecto a su desempeño
            laboral:
          </h3>
          {errors.p34 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p34', {required: true})} 
          />
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p35', {required: true})} 
          />
          {/* P36 */}
          <hr style={{ marginTop: 30 }} />
          <h3>2. Titulación:</h3>
          {errors.p36 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p36', {required: true})} 
          />
          {/* P37 */}
          <hr style={{ marginTop: 30 }} />
          <h3>3. Experiencia Laboral/práctica (antes de egresar):</h3>
          {errors.p37 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p37', {required: true})} 
          />
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p38', {required: true})} 
          />
          {/* P39 */}
          <hr style={{ marginTop: 30 }} />
          <h3>5. Posicionamiento de la institución de egreso:</h3>
          {errors.p39 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p39', {required: true})} 
          />
          {/* P40 */}
          <hr style={{ marginTop: 30 }} />
          <h3>6. Conocimiento de idiomas extranjeros:</h3>
          {errors.p40 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p40', {required: true})} 
          />
          {/* P41 */}
          <hr style={{ marginTop: 30 }} />
          <h3>7. Recomendaciones / referencias:</h3>
          {errors.p41 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p41', {required: true})} 
          />
          {/* P42 */}
          <hr style={{ marginTop: 30 }} />
          <h3>8. Personalidad / actitudes:</h3>
          {errors.p42 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p42', {required: true})} 
          />
          {/* P43 */}
          <hr style={{ marginTop: 30 }} />
          <h3>9. Capacidad de liderazgo:</h3>
          {errors.p43 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p43', {required: true})} 
          />
          {/* P44 */}
          <hr style={{ marginTop: 30 }} />
          <h3>10. Otros:</h3>
          {errors.p44 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p44', {required: true})} 
          />
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
              <TextField
            fullWidth
            id="text"
            disabled
            {...register('p45', {required: true})} 
          />
            </Grid>
            {/* P46 */}
            <Grid item xs={7}>
            {errors.p46 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              disabled
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
              <TextField
            fullWidth
            id="text"
            disabled
            {...register('p47', {required: true})} 
          />
            </Grid>
            {/* P48 */}
            <Grid item xs={7}>
            {errors.p48 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              disabled
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
              <TextField
            fullWidth
            id="text"
            disabled
            {...register('p49', {required: true})} 
          />
            </Grid>
            {/* P50 */}
            <Grid item xs={7}>
            {errors.p50 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              disabled
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
              <TextField
            fullWidth
            id="text"
            disabled
            {...register('p51', {required: true})} 
          />
            </Grid>
            {/* P52 */}
            <Grid item xs={7}>
            {errors.p52 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              disabled
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
              <TextField
            fullWidth
            id="text"
            disabled
            {...register('p53', {required: true})} 
          />
            </Grid>
            {/* P54 */}
            <Grid item xs={7}>
            {errors.p54 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              disabled
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
              <TextField
            fullWidth
            id="text"
            disabled
            {...register('p55', {required: true})} 
          />
            </Grid>
            {/* P56 */}
            <Grid item xs={7}>
            {errors.p56 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
              <TextField 
              fullWidth 
              id="text"
              disabled
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p57', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P58 */}
          <h3>
            2. Identifican, previenen, controlan y dan solución a 
            problemas de alta dirección dentro de la práctica de la ingeniería bioquímica
          </h3>
          {errors.p58 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p58', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P59 */}
          <h3>
          3. Identifican y aplican tecnologías emergentes relacionadas con el campo de acción del Ingeniero Bioquímico
          </h3>
          {errors.p59 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p59', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P60 */}
          <h3>
          3. Identifican y aplican tecnologías emergentes relacionadas con el campo de acción del Ingeniero Bioquímico
          </h3>
          {errors.p60 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p60', {required: true})} 
          />
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p61', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P62 */}
          <h3>
          5. Formulan y evalúan proyectos de Ingeniería Bioquímica con criterios de sustentabilidad
          </h3>
          {errors.p62 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p62', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P63 */}
          <h3>
          6. Realizan investigación
           científica y tecnológica en el campo de la Ingeniería Bioquímica y difunden sus resultados
          </h3>
          {errors.p63 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p63', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P64 */}
          <h3>
          7. Crean, implementan y administran con sustentabilidad empresas
          de productos y servicios del ámbito de la Ingeniería Bioquímica.
          </h3>
          {errors.p64 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p64', {required: true})} 
          />
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
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p65', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P66 */}
          <h3>
          2. Realizar procesos adecuados de diseño de Ingeniería
          </h3>
          {errors.p66 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p66', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P67 */}
          <h3>
          3. Realizar experimentación adecuada
          </h3>
          {errors.p67 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p67', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P68 */}
          <h3>
          4. Comunicarse efectivamente
          </h3>
          {errors.p68 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p68', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P69 */}
          <h3>
          5. Reconocer sus responsabilidades éticas y profesionales
          </h3>
          {errors.p69 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p69', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P70 */}
          <h3>
          6. Actualizarse permanentemente
          </h3>
          {errors.p70 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p70', {required: true})} 
          />
          <hr style={{ marginTop: 30 }} />
          {/* P71 */}
          <h3>
          7. Trabajar en equipo
          </h3>
          {errors.p71 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
            fullWidth
            id="text"
            disabled
            {...register('p71', {required: true})} 
          />
        </section>
        <section className="encuesta">
          <h1>
            X. COMENTARIOS Y SUGERENCIAS.
          </h1>
        </section>
        <section className="encuesta">
            {/* P72 */}
            <h3>Opinión o recomendación para mejorar la formación profesional
                 de un egresado de su carrera</h3>
                 {errors.p72 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
                 <TextareaAutosize
                    style={{width: 630, height: 200}}
                    id="p72"
                    disabled
                    {...register('p72', {required: true})} 
                 />
        </section>
      </form>
    </div>
  );
}

export default EncuestaEgresado;
