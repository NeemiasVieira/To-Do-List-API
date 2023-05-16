import {AuthenticateUserUseCase} from "./AuthenticateUserUseCase.js";

export class AuthenticateUserController {
  constructor(){
    this.authenticateUserUseCase = new AuthenticateUserUseCase();
  }

  async handle(request, response){
    const {username, password} = request.body;

    const token = await this.authenticateUserUseCase.execute(username, password);

    response.json(token);
  }
}