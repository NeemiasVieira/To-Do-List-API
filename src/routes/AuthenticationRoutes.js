import Router from "express";
import { authenticateUserController } from "../modules/users/usecases/AuthenticateUser/index.js";

const AuthenticationRoutes = Router();

export const asyncErrors = (handle) => { 
  return (request, response, next) => {
    return Promise.resolve(handle(request, response, next))
    .catch(e => next(e));
  }
}

AuthenticationRoutes.post("/", asyncErrors((request, response) => {
  return authenticateUserController.handle(request, response);
}))

export default AuthenticationRoutes;