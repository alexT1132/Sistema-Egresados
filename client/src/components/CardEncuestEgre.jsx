import * as React from 'react';
import Grid from "@mui/material/Grid";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";

import { useAuth } from "../context/AuthContext";
import { useEncuestEgresado } from "../context/EncuestEgresadoContext";

export default function CardEncuestEgre() {

    const {user} = useAuth();
        const {encuestEgres, getsEncuestEgre} = useEncuestEgresado();

        let datosCardEncuest;

        const encuestDone = encuestEgres.find(encuestEgre => encuestEgre.p73);

        if (encuestDone){
          if (encuestDone.p73 !== user.usuario){
            datosCardEncuest = <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <CloseIcon style={{fontSize: 100, marginTop: 30, color: 'red'}} />
            </Grid>
            <Grid item xs={9}>
                <h1 style={{marginTop: 30}}>Encuesta no completada</h1>
            </Grid>
        </Grid>
          } else {
            datosCardEncuest = <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                    <CheckIcon style={{fontSize: 100, marginTop: 30, color: 'green'}} />
                </Grid>
                <Grid item xs={9}>
                    <h1 style={{marginTop: 50}}>Encuesta completada</h1>
                </Grid>
            </Grid>
          }
        } else {
            datosCardEncuest = <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <CloseIcon style={{fontSize: 100, marginTop: 30, color: 'red'}} />
            </Grid>
            <Grid item xs={9}>
                <h1 style={{marginTop: 30}}>Encuesta no completada</h1>
            </Grid>
        </Grid>
        }

  useEffect(() => {
    getsEncuestEgre();
  }, [])

  return (
    <React.Fragment>
      {datosCardEncuest}
    </React.Fragment>
  );
}