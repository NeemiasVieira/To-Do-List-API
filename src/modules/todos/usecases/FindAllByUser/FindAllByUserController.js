import { FindAllByUserUseCase } from "./FindAllByUserUseCase.js";

export class FindAllByUserController{
  constructor(){
    this.findAllByUserUseCase = new FindAllByUserUseCase();
  }
  
  async handle(request, response){
    const user_id = request.user.id; //Vem de middleware
    const todos = await this.findAllByUserUseCase.execute(user_id);

    return response.json(todos);
}
}