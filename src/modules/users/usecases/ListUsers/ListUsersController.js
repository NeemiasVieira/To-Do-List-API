import { ListUsersUseCase } from "./ListUsersUseCase.js"

export class ListUsersController {
  constructor(){
    this.listUsersUseCase = new ListUsersUseCase();

  }

  async handle(request, response){
    const users = await this.listUsersUseCase.execute();

    return response.json(users);

  }
}