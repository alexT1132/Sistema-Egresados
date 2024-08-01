import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

import { useAuth } from "../context/AuthContext";
import { useFormEgresado } from "../context/FormEgresadoContext";
import { useEncuestEgresado } from "../context/EncuestEgresadoContext";


export const mainListItems = () => { 

        const {user} = useAuth();
        const {formEgres, getsFormEgre} = useFormEgresado();
        const {encuestEgres, getsEncuestEgre} = useEncuestEgresado();


    const verificacion = () => {

      const formDone = formEgres.find(formEgre => formEgre.completado);

        if (formDone){
          if (formDone.completado !== user.usuario){
            window.location.href = '/egresado_Form';
          } else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Ya has respondido el formulario!",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } else {
          window.location.href = '/egresado_Form';
        }


        }

    const verificacionEncuesta = () => {
      const encuestDone = encuestEgres.find(encuestEgre => encuestEgre.p73);
      
      if(encuestDone){
        if (encuestDone.p73 !== user.usuario){
          window.location.href = '/egresado_Encuesta';
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Ya has respondido la encuesta!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } else {
        window.location.href = '/egresado_Encuesta';
      }

    }

  useEffect(() => {
    getsFormEgre();
    getsEncuestEgre();
  }, [])

  return (
  <React.Fragment>
      <Link to='/egresado' style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton sx={{mt: 4}}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton onClick={verificacion} sx={{mt: 4}}>
          <ListItemIcon>
            <ChecklistIcon />
          </ListItemIcon>
          <ListItemText primary="Formulario" />
        </ListItemButton>
      </Link>
      <Link style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton onClick={verificacionEncuesta} sx={{mt: 4}}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Encuesta" />
        </ListItemButton>
      </Link>
  </React.Fragment>
  );
}

export const logoutListItems = () => {

  const {logout} = useAuth();

  return (
  <React.Fragment>
    <Link to='/' onClick={() => {logout()}} style={{textDecoration: 'none', color: 'black'}}>
      <ListItemButton sx={{mt: 4}}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Cerrar Sessión" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
}