import { Router } from "express";
import usersRouters from "../routes/UsersRoutes.js";
import todosRoutes from "../routes/TodosRoutes.js";

const routes = Router();
routes.use("/users", usersRouters);
routes.use("/todos", todosRoutes);
export default routes;