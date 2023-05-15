import Router from 'express';
import { createUserController } from '../modules/users/usecases/CreateUser/index.js';
import { listUsersController } from '../modules/users/usecases/ListUsers/index.js';



const usersRouters = Router();


//Rota de criação de usuários
usersRouters.post("/", (request, response) => {

  return createUserController.handle(request, response);

})

//Rota de listagem de usuários
usersRouters.get("/", (request, response) => {
  return listUsersController.handle(request, response);

})


export default usersRouters;