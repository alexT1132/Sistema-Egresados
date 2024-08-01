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
import { useFormEmpleador } from "../context/FormEmpleadorContext";
import { useEncuestEmpleador } from "../context/EncuestEmpleadorContext";


export const mainListItems = () => {

  const {user} = useAuth();
  const {formEmpleadores, getsFormEmpleadores} = useFormEmpleador();
  const {encuestEmples, getsEncuestEmple} = useEncuestEmpleador();

  const verificacionForm = () => {

    const formDone = formEmpleadores.find(formEmpleador => formEmpleador.completado);

      if (formDone){
        if (formDone.completado !== user.usuario){
          window.location.href = '/empleador_Form';
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
        window.location.href = '/empleador_Form';
      }
      }

      const verificacionEncuesta = () => {
        const encuestDone = encuestEmples.find(encuestEmple => encuestEmple.p56);
        
        if(encuestDone){
          if (encuestDone.p56 !== user.usuario){
            window.location.href = '/empleador_Encuesta';
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
          window.location.href = '/empleador_Encuesta';
        }
  
      }

      useEffect(() => {
        getsFormEmpleadores();
        getsEncuestEmple();
      }, [])

  return (
    <React.Fragment>
        <Link to='/empleador' style={{textDecoration: 'none', color: 'black'}}>
          <ListItemButton sx={{mt: 4}}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Link>
        <Link style={{textDecoration: 'none', color: 'black'}}>
          <ListItemButton onClick={verificacionForm} sx={{mt: 4}}>
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