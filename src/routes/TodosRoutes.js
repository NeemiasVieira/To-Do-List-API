import Router from 'express'
import { createTodoController } from '../modules/todos/usecases/CreateTodo/index.js';
import { findAllByUserController } from '../modules/todos/usecases/FindAllByUser/index.js';
import { deleteTodoByIdController } from '../modules/todos/usecases/DeleteTodoById/index.js';
import { markTodoAsDoneController } from '../modules/todos/usecases/MarkTodoAsDone/index.js';
import { updateTodoByIdController } from '../modules/todos/usecases/UpdateTodoById/index.js';
import { ensureAuthentication } from '../middlewares/ensureAuthentication.js';
import { permission } from '../middlewares/cors.js';
//Resolve erros asincronos não tratados pelo Express
const asyncErrors = (handle) => { 
  return (request, response, next) => {
    return Promise.resolve(handle(request, response, next))
    .catch(e => next(e));
  }
}


const todosRoutes = Router();

todosRoutes.post("/", asyncErrors((request, response) => {
  permission(response);
  return createTodoController.handle(request, response);
}))

todosRoutes.get("/", asyncErrors(ensureAuthentication), asyncErrors((request, response) => {
  permission(response);
  return findAllByUserController.handle(request, response);
}))

todosRoutes.delete("/:id", asyncErrors((request, response) => {
  permission(response);
  return deleteTodoByIdController.handle(request, response);
}))

todosRoutes.patch("/:id", asyncErrors((request, response) => {
  permission(response);
  return markTodoAsDoneController.handle(request, response);
}))

todosRoutes.put("/:id", asyncErrors((request, response) => {
  permission(response);
  return updateTodoByIdController.handle(request, response);
}))


export default todosRoutes;