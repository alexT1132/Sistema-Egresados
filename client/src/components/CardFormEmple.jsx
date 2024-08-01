import * as React from 'react';
import Grid from "@mui/material/Grid";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";

import { useAuth } from "../context/AuthContext";
import { useFormEmpleador } from "../context/FormEmpleadorContext";

export default function Deposits() {

    const {user} = useAuth();
        const {formEmpleadores, getsFormEmpleadores} = useFormEmpleador();

        let datosCard;

      const formDone = formEmpleadores.find(formEmpleador => formEmpleador.completado);

        if (formDone){
          if (formDone.completado !== user.usuario){
            datosCard = <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <CloseIcon style={{fontSize: 100, marginTop: 30, color: 'red'}} />
            </Grid>
            <Grid item xs={9}>
                <h1 style={{marginTop: 30}}>Formulario no completado</h1>
            </Grid>
        </Grid>
          } else {
            datosCard = <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                    <CheckIcon style={{fontSize: 100, marginTop: 30, color: 'green'}} />
                </Grid>
                <Grid item xs={9}>
                    <h1 style={{marginTop: 50}}>Formulario completado</h1>
                </Grid>
            </Grid>
          }
        } else {
            datosCard = <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <CloseIcon style={{fontSize: 100, marginTop: 30, color: 'red'}} />
            </Grid>
            <Grid item xs={9}>
                <h1 style={{marginTop: 30}}>Formulario no completado</h1>
            </Grid>
        </Grid>
        }

  useEffect(() => {
    getsFormEmpleadores();
  }, [])

  return (
    <React.Fragment>
      {datosCard}
    </React.Fragment>
  );
}