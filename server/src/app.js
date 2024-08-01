import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import formEgresadosRoutes from "./routes/formEgresados.routes.js";
import encuestEgresadosRoutes from "./routes/encuestEgresados.routes.js";
import FormEmpleadoresRoutes from "./routes/formEmpleador.routes.js";
import encuestEmpleadoresRoutes from "./routes/encuestEmpleador.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", usersRoutes);
app.use("/api", formEgresadosRoutes);
app.use("/api", encuestEgresadosRoutes);
app.use("/api", FormEmpleadoresRoutes);
app.use("/api", encuestEmpleadoresRoutes);

export default app;
