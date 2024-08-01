import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ButtonRegister from "./ButtonRegister";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" style={{justifyContent: 'space-between'}}>
          <Typography variant="h5" color="inherit" component="div">
            INSTITUTO TECNOLOGICO DE TUXTEPEC
          </Typography>
          <ButtonRegister />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
