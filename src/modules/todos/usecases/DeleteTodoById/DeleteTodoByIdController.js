import { DeleteTodoByIdUseCase } from "./DeleteTodoByIdUseCase.js";

export class DeleteTodoByIdController{
  constructor(){
    this.deleteTodoByIdUseCase = new DeleteTodoByIdUseCase();
  }
  async handle(request, response){
    const id = request.params.id;
  
    await this.deleteTodoByIdUseCase.execute(id);
    
    response.status(204).send();

  }
}