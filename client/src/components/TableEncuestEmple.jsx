import * as React from 'react';
import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEncuestEmpleador } from "../context/EncuestEmpleadorContext";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { RiFileExcel2Fill } from "react-icons/ri";

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'p0', label: 'Empresa', minWidth: 100 },
  {
    id: 'p1',
    label: 'Empleador',
    minWidth: 170,
  },
  {
    id: 'acciones',
    label: 'Acciones',
    minWidth: 170,
  },
];

export default function TableEncuestEmple() {

  const {encuestEmples, getsEncuestEmple, deleteEncuestaEmple } = useEncuestEmpleador();

  const [search, setSearch] = useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Función para exportar los datos a Excel
  const handleExport = () => {
    // Crear una hoja de trabajo a partir de los datos
    const worksheet = XLSX.utils.json_to_sheet(encuestEmples);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Convertir el libro de trabajo a un archivo binario
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // Función para convertir una cadena en un ArrayBuffer
    const s2ab = (s) => {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xFF;
      }
      return buf;
    };

    // Crear un Blob y guardarlo como archivo
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    saveAs(blob, 'Encuestas_Empleadores.xlsx');
  };  

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = encuestEmples;
  } else {
    results = encuestEmples.filter((dato) =>
      dato.p0.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    getsEncuestEmple();
  }, [])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} display='flex' justifyContent='center' alignItems='center' >
            <Button onClick={handleExport} variant='outlined' style={{color: 'green', height: '50px', borderColor: 'green'}}>
                <RiFileExcel2Fill style={{fontSize: 30}} />
            </Button>
        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
            <TextField
                value={search}
                onChange={searcher}
                id="outlined-textarea"
                placeholder="Buscar..."
                fullWidth
                margin='normal'
            />
        </Grid>
      </Grid>
    </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, textAlign: 'center' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {results
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((encuestEmple, index) => {
                return (
                  <tr key={encuestEmple._id}>
                    <td>{index + 1}</td>
                    <td>{encuestEmple.p0}</td>
                    <td>{encuestEmple.p1}</td>
                    <td>
                      <Link to={`/admin_Encuesta_Empleadores/${encuestEmple._id}`}>
                        <button style={{border: 'none', background: 'none'}}>
                          <VisibilityIcon color='primary' />
                        </button>
                      </Link>
                      <button onClick={() => {deleteEncuestaEmple(encuestEmple._id)}} style={{border: 'none', background: 'none'}}>
                        <DeleteIcon style={{color: 'red'}} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={encuestEmples.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}