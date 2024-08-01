import React, {useEffect} from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useForm } from "react-hook-form";
import { useEncuestEmpleador } from "../context/EncuestEmpleadorContext";
import { useParams } from "react-router-dom";

function EncuestaEmpleador() {

    const params = useParams();

    const {getEncuestaEmple} = useEncuestEmpleador();

    const {register, setValue, formState: {errors}} = useForm();

    useEffect(() => {
        async function loadEncuestEmple() {
            if (params.id) {
                const encuestaEmple = await getEncuestaEmple(params.id);
                setValue('p0', encuestaEmple.p0);
                setValue('p1', encuestaEmple.p1);
                setValue('p2', encuestaEmple.p2);
                setValue('p3', encuestaEmple.p3);
                setValue('p4', encuestaEmple.p4);
                setValue('p5', encuestaEmple.p5);
                setValue('p6', encuestaEmple.p6);
                setValue('p7', encuestaEmple.p7);
                setValue('p8', encuestaEmple.p8);
                setValue('p9', encuestaEmple.p9);
                setValue('p10', encuestaEmple.p10);
                setValue('p11', encuestaEmple.p11);
                setValue('p12', encuestaEmple.p12);
                setValue('p13', encuestaEmple.p13);
                setValue('p14', encuestaEmple.p14);
                setValue('p15', encuestaEmple.p15);
                setValue('p16', encuestaEmple.p16);
                setValue('p17', encuestaEmple.p17);
                setValue('p18', encuestaEmple.p18);
                setValue('p19', encuestaEmple.p19);
                setValue('p20', encuestaEmple.p20);
                setValue('p21', encuestaEmple.p21);
                setValue('p22', encuestaEmple.p22);
                setValue('p23', encuestaEmple.p23);
                setValue('p24', encuestaEmple.p24);
                setValue('p25', encuestaEmple.p25);
                setValue('p26', encuestaEmple.p26);
                setValue('p27', encuestaEmple.p27);
                setValue('p28', encuestaEmple.p28);
                setValue('p29', encuestaEmple.p29);
                setValue('p30', encuestaEmple.p30);
                setValue('p31', encuestaEmple.p31);
                setValue('p32', encuestaEmple.p32);
                setValue('p33', encuestaEmple.p33);
                setValue('p34', encuestaEmple.p34);
                setValue('p35', encuestaEmple.p35);
                setValue('p36', encuestaEmple.p36);
                setValue('p37', encuestaEmple.p37);
                setValue('p38', encuestaEmple.p38);
                setValue('p39', encuestaEmple.p39);
                setValue('p40', encuestaEmple.p40);
                setValue('p41', encuestaEmple.p41);
                setValue('p42', encuestaEmple.p42);
                setValue('p43', encuestaEmple.p43);
                setValue('p44', encuestaEmple.p44);
                setValue('p45', encuestaEmple.p45);
                setValue('p46', encuestaEmple.p46);
                setValue('p47', encuestaEmple.p47);
                setValue('p48', encuestaEmple.p48);
                setValue('p49', encuestaEmple.p49);
                setValue('p50', encuestaEmple.p50);
                setValue('p51', encuestaEmple.p51);
                setValue('p52', encuestaEmple.p52);
                setValue('p53', encuestaEmple.p53);
                setValue('p54', encuestaEmple.p54);
                setValue('p55', encuestaEmple.p55);
            }
        }
        loadEncuestEmple();
    }, []);

  return (
    <div className="container-encuesta">
        <form>
        <section className="encuesta">
            {/* P0 */}
            {errors.p0 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Nombre comercial de la empresa</p>
            <TextField
                fullWidth
                id="text"
                disabled
                {...register('p0', {required: true})} 
            />
            <hr style={{ marginTop: 20 }} />
            {/* P1 */}
            {errors.p1 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <p>Nombre del empleador</p>
            <TextField
                fullWidth
                id="text"
                disabled
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
            <TextField
                fullWidth
                id="text"
                disabled
                {...register('p2', {required: true})} 
            />
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
                {...register('p7', {required: true})} 
            />
            </Grid>
          </Grid>
          <hr style={{ marginTop: 20 }} />
          <h1>3.- Congruencia entre perfil profesional y función que desarrollan los egresados del Instituto Tecnológico en su empresa u organización.</h1>
             {/* P8 */}
             {errors.p8 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p8', {required: true})} 
            />
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
                disabled
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
                disabled
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
                fullWidth
                id="text"
                disabled
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
                fullWidth
                id="text"
                disabled
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
                fullWidth
                id="text"
                disabled
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
                fullWidth
                id="text"
                disabled
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
                disabled
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
                disabled
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
                disabled
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
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p18', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>B. Ortografía y redacción de documentos</h3>
            {/* P19 */}
            {errors.p19 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p19', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>C. Mejora de procesos</h3>
            {/* P20 */}
            {errors.p20 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p20', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>D. Trabajo en equipo</h3>
            {/* P21 */}
            {errors.p21 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p21', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>E. Habilidad para administrar tiempo</h3>
            {/* P22 */}
            {errors.p22 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p22', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>F. Seguridad personal</h3>
            {/* P23 */}
            {errors.p23 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p23', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>G. Facilidad de palabra</h3>
            {/* P24 */}
            {errors.p24 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p24', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>H. Gestión de Proyectos</h3>
            {/* P25 */}
            {errors.p25 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p25', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>I. Puntualidad y Asistencia</h3>
            {/* P26 */}
            {errors.p26 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p26', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>J. Cumplimiento de las normas</h3>
            {/* P27 */}
            {errors.p27 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p27', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>K. Integración al trabajo</h3>
            {/* P28 */}
            {errors.p28 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p28', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>L. Creatividad e innovación</h3>
            {/* P29 */}
            {errors.p29 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p29', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>M. Capacidad de negociación</h3>
            {/* P30 */}
            {errors.p30 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p30', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>N. Capacidad de abstracción, análisis y síntesis</h3>
            {/* P31 */}
            {errors.p31 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p31', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>O. Liderazgo y toma de decisiones</h3>
            {/* P32 */}
            {errors.p32 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p32', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>P. Adaptación al cambio</h3>
            {/* P33 */}
            {errors.p33 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p33', {required: true})} 
            />
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
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p34', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>
            2. ¿Los egresados de la carrera de IBQ diseñan, seleccionan, adaptan y escalan 
            equipos y procesos de manera sustentable aprovechando los recursos bióticos?
            </h3>
            {/* P35 */}
            {errors.p35 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p35', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>
            3. ¿Identifican, previenen, controlan y dan solución a problemas de alta dirección 
            dentro de la práctica de la ingeniería bioquímica?
            </h3>
            {/* P36 */}
            {errors.p36 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p36', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>
            4. ¿Identifican y aplican tecnologías emergentes relacionadas con el 
            campo de acción del Ingeniero Bioquímico?
            </h3>
            {/* P37 */}
            {errors.p37 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p37', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>
            5. ¿Participan en el diseño y aplicación de normas y programas de gestión y aseguramiento 
            de la calidad, en empresas e instituciones del ámbito de la Ingeniería Bioquímica?
            </h3>
            {/* P38 */}
            {errors.p38 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p38', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>
            6. ¿Formulan y evalúan proyectos de Ingeniería Bioquímica con criterios de Sustentabilidad?
            </h3>
            {/* P39 */}
            {errors.p39 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p39', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>
            7. ¿Realizan investigación científica y tecnológica en el campo de la IBQ y difunden 
            sus resultados (SOLO SI APLICA)?
            </h3>
            {/* P40 */}
            {errors.p40 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p40', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>
            8. ¿Crean, implementan y administran con sustentabilidad, 
            empresas de productos y servicios del ámbito de la IBQ?
            </h3>
            {/* P41 */}
            {errors.p41 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p41', {required: true})} 
            />
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
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p42', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
            <h3>
            2. ¿Puede identificar, formular y resolver problemas referentes al área de la 
            Ingeniería Bioquímica usando los conocimientos adquiridos en su formación profesional?
            </h3>
            {/* P43 */}
            {errors.p43 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p43', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
          <h3>
          3. ¿Es capaz de planificar y administrar proyectos de ingeniería 
          con criterios de calidad, eficiencia y productividad?
            </h3>
            {/* P44 */}
            {errors.p44 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p44', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
          <h3>
            4. ¿Puede realizar la simulación y modelación de sistemas y procesos para su 
            evaluación y optimización usando las tecnologías actuales?
            </h3>
            {/* P45 */}
            {errors.p45 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p45', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
          <h3>
          5. ¿Realiza y conduce experimentos analizando e interpretando los resultados 
          obtenidos y formulando reportes técnico-científicos?
            </h3>
            {/* P46 */}
            {errors.p46 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p46', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
          <h3>
          6. ¿Se actualiza de manera continua para estar a la vanguardia en el desarrollo de la 
          ciencia y la tecnología acorde a su formación profesional?
            </h3>
            {/* P47 */}
            {errors.p47 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p47', {required: true})} 
            />
          <hr style={{ marginTop: 20 }} />
          <h3>
          7. ¿Mantiene y promueve la comunicación efectiva con el personal que labora?
            </h3>
            {/* P48 */}
            {errors.p48 && (
            <p style={{color: 'red'}}>La informacion es requerida</p>
          )}
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p48', {required: true})} 
            />
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
          <TextField
                fullWidth
                id="text"
                disabled
                {...register('p49', {required: true})} 
            />
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
                {...register('p55', {required: true})} 
            />
        </section>
        </form>
    </div>
  )
}

export default EncuestaEmpleador