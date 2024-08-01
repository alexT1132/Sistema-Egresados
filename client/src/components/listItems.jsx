import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const mainListItems = (
  <React.Fragment>
      <Link to='/admin' style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link to='/admin_register' style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton>
          <ListItemIcon>
            <PersonAddAlt1Icon />
          </ListItemIcon>
          <ListItemText primary="Registro" />
        </ListItemButton>
      </Link>
      <Link to='/admin_users' style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItemButton>
      </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Formularios
    </ListSubheader>
    <Link to='/admin_Form_Empleadores' style={{textDecoration: 'none', color: 'black'}}>
      <ListItemButton>
        <ListItemIcon>
          <ChecklistIcon />
        </ListItemIcon>
        <ListItemText primary="Empleadores" />
      </ListItemButton>
    </Link>
    <Link to='/admin_Form_Egresados' style={{textDecoration: 'none', color: 'black'}}>
      <ListItemButton>
        <ListItemIcon>
          <ChecklistIcon />
        </ListItemIcon>
        <ListItemText primary="Egresados" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const terciaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Encuestas
    </ListSubheader>
    <Link to='/admin_Encuesta_Empleadores' style={{textDecoration: 'none', color: 'black'}}>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Empleadores" />
      </ListItemButton>
    </Link>
    <Link to='/admin_Encuesta_egresados' style={{textDecoration: 'none', color: 'black'}}>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Egresados" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const logoutListItems = () => {

  const {logout} = useAuth();

  return (
    <React.Fragment>
      <Link to='/' onClick={() => {logout()}} style={{textDecoration: 'none', color: 'black'}}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sessión" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
}