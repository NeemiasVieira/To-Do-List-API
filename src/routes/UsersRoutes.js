import Router from 'express';
import { createUserController } from '../modules/users/usecases/CreateUser/index.js';
import { listUsersController } from '../modules/users/usecases/ListUsers/index.js';
import { permission } from '../middlewares/cors.js';


// Resolve erros asincronos não tratados pelo Express

const asyncErrors = (handle) => { 
  return (request, response, next) => {
    return Promise.resolve(handle(request, response, next))
    .catch(e => next(e));
  }
}

const usersRouters = Router();


//Rota de criação de usuários
usersRouters.post("/", asyncErrors((request, response) => {
  permission(response);
  return createUserController.handle(request, response);

}))

//Rota de listagem de usuários
usersRouters.get("/", (request, response) => {
  permission(response);
  return listUsersController.handle(request, response);

})


export default usersRouters;