import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  mainListItems,
  secondaryListItems,
  terciaryListItems,
  logoutListItems,
} from "../components/listItems";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdminRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signupAdmin, errors: registerErrors } = useAuth();

  const onSubmit = handleSubmit( async (values) => {
    signupAdmin(values);
  });

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Registro
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: "4px" }} />
            {secondaryListItems}
            <Divider sx={{ my: "3px" }} />
            {terciaryListItems}
            <Divider sx={{ my: "3px" }} />
            {logoutListItems()}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {registerErrors.map((error, i) => (
                    <div
                      style={{
                        background: "red",
                        color: "white",
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                        fontSize: 20,
                      }}
                      key={i}
                    >
                      {error}
                    </div>
                  ))}
                  <Box
                    component="form"
                    noValidate
                    onSubmit={onSubmit}
                    sx={{ mt: 1 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        {errors.nombre && (
                          <p style={{ color: "red" }}>El nombre es requerido</p>
                        )}
                        <TextField
                          required
                          fullWidth
                          {...register("nombre", { required: true })}
                          id="nombre"
                          label="Nombre completo"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {errors.usuario && (
                          <p style={{ color: "red" }}>
                            El usuario es requerido
                          </p>
                        )}
                        <TextField
                          required
                          fullWidth
                          {...register("usuario", { required: true })}
                          id="usuario"
                          label="Usuario"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {errors.contraseña && (
                          <p style={{ color: "red" }}>La contraseña es requerida</p>
                        )}
                        <TextField
                          required
                          fullWidth
                          {...register("contraseña", { required: true })}
                          label="Contraseña"
                          type="password"
                          id="password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {errors.role && (
                          <p style={{ color: "red" }}>El role es requerido</p>
                        )}
                        <FormControl sx={{ width: 400 }} size="medium">
                          <InputLabel id="demo-select-small-label">
                            Role
                          </InputLabel>
                          <Select
                            id="demo-select-small"
                            {...register("role", { required: true })}
                            value={age}
                            label="Role"
                            onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>Selecciona una opción</em>
                            </MenuItem>
                            <MenuItem value="administrador">Administrador</MenuItem>
                            <MenuItem value="empleador">Empleador</MenuItem>
                            <MenuItem value="egresado">Egresado</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Registrar
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
