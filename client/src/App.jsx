import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UsersContext";
import { FormEgresadoProvider } from "./context/FormEgresadoContext";
import { EncuestEgresadoProvider } from "./context/EncuestEgresadoContext";
import { FormEmpleadorProvider } from "./context/FormEmpleadorContext";
import { EncuestEmpleadorProvider } from "./context/EncuestEmpleadorContext";

import Login from "./pages/Login";
import RegisterEmpleador from "./pages/RegisterEmpleador";
import RegisterEgresado from "./pages/RegisterEgresado";
import Admin from "./pages/Admin";
import AdminRegister from "./pages/AdminRegister";
import AdminUsers from "./pages/AdminUsers";
import AdminFormEgresados from "./pages/AdminFormEgresados";
import AdminFormEgreView from "./pages/AdminFormEgresadosView";
import AdminFormEmpleadores from "./pages/AdminFormEmple";
import AdminEncuestEmple from "./pages/AdminEncuestEmple";
import AdminEncuesEgre from "./pages/AdminEncuestEgre";
import Empleador from "./pages/Empleador";
import EmpleadorForm from "./pages/EmpleadorForm";
import AdminFormEmpleView from "./pages/AdminFormEmpleadoresView";
import EmpleadorEncuesta from "./pages/EmpleadorEncuesta";
import Egresado from "./pages/Egresado";
import EgresadoForm from "./pages/EgresadoForm";
import EgresadoEncuesta from "./pages/EgresadoEncuesta";
import ProtectedRoute from "./ProtectedRoute";
import AdminEncuestEmpleView from "./pages/AdminEncuestEmpleView";
import AdminEncuestEgreView from "./pages/AdminEncuestEgreView";

function App() {
  return (
    <AuthProvider>
      <EncuestEmpleadorProvider>
      <FormEmpleadorProvider>
      <EncuestEgresadoProvider>
        <FormEgresadoProvider>
          <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route
                  path="/register_empleador"
                  element={<RegisterEmpleador />}
                />
                <Route
                  path="/register_egresado"
                  element={<RegisterEgresado />}
                />

                <Route element={<ProtectedRoute />}>
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin_register" element={<AdminRegister />} />
                  <Route path="/admin_users" element={<AdminUsers />} />

                  <Route path="/admin_Form_Empleadores" element={<AdminFormEmpleadores />} />
                  <Route path="/admin_Form_Empleadores/:id" element={<AdminFormEmpleView />} />

                  <Route path="/admin_Form_Egresados" element={<AdminFormEgresados />} />
                  <Route path="/admin_Form_Egresados/:id" element={<AdminFormEgreView />} />

                  <Route path="/admin_Encuesta_Empleadores" element={<AdminEncuestEmple />} />
                  <Route path="/admin_Encuesta_Empleadores/:id" element={<AdminEncuestEmpleView />} />

                  <Route path="/admin_Encuesta_egresados" element={<AdminEncuesEgre />} />
                  <Route path="/admin_Encuesta_Egresados/:id" element={<AdminEncuestEgreView />} />

                  <Route path="/empleador" element={<Empleador />} />
                  <Route path="/empleador_Form" element={<EmpleadorForm />} />
                  <Route path="/empleador_Encuesta" element={<EmpleadorEncuesta />} />

                  <Route path="/egresado" element={<Egresado />} />
                  <Route path="/egresado_Form" element={<EgresadoForm />} />
                  <Route path="/egresado_Encuesta" element={<EgresadoEncuesta />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </FormEgresadoProvider>
      </EncuestEgresadoProvider>
      </FormEmpleadorProvider>
      </EncuestEmpleadorProvider>
    </AuthProvider>
  );
}

export default App;
