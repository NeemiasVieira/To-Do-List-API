import Router from "express";
import { authenticateUserController } from "../modules/users/usecases/AuthenticateUser/index.js";
import { permission } from "../middlewares/cors.js";

const AuthenticationRoutes = Router();

export const asyncErrors = (handle) => { 
  return (request, response, next) => {
    return Promise.resolve(handle(request, response, next))
    .catch(e => next(e));
  }
}

AuthenticationRoutes.post("/", asyncErrors((request, response) => {
  permission(response);
  return authenticateUserController.handle(request, response);
}))

export default AuthenticationRoutes;