import { FindAllByUserUseCase } from "./FindAllByUserUseCase.js";

export class FindAllByUserController{
  constructor(){
    this.findAllByUserUseCase = new FindAllByUserUseCase();
  }
  
  async handle(request, response){
    const {username} = request.params;
    const todos = await this.findAllByUserUseCase.execute(username);

    return response.json(todos);
}
}