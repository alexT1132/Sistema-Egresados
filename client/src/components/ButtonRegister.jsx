import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Link } from "react-router-dom";

export default function ButtonRegister() {
  return (
    <Stack direction="row" spacing={2}>
        <Link to='/'>
            <Button variant="contained" style={{background: '#D10A0A'}}>Iniciar Sessión</Button>
        </Link>
    </Stack>
  );
}
