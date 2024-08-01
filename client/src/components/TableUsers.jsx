import * as React from 'react';
import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUser } from "../context/UsersContext";

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'nombre', label: 'Nombre', minWidth: 100 },
  {
    id: 'usuario',
    label: 'Usuario',
    minWidth: 170,
  },
  {
    id: 'role',
    label: 'Role',
    minWidth: 170,
  },
  {
    id: 'acciones',
    label: 'Acciones',
    minWidth: 170,
  },
];

export default function TableUsers() {

  const {users, getUsers, deleteUser } = useUser();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.nombre}</td>
                    <td>{user.usuario}</td>
                    <td>{user.role}</td>
                    <td>
                      <button onClick={() => {deleteUser(user._id)}} style={{border: 'none', background: 'none'}}>
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
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
