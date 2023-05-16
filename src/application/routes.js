import { Router } from "express";
import usersRouters from "../routes/UsersRoutes.js";
import todosRoutes from "../routes/TodosRoutes.js";
import AuthenticationRoutes from "../routes/AuthenticationRoutes.js";

const routes = Router();

routes.use("/users", usersRouters);
routes.use("/todos", todosRoutes);
routes.use("/sessions", AuthenticationRoutes);

export default routes;