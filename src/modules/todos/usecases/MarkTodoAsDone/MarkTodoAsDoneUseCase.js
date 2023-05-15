import { TodosRepository } from "../../repositories/TodosRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";

export class MarkTodoAsDoneUseCase{
  constructor(){
    this.todosRepository = TodosRepository.getInstance();
  }

  execute(id){

    const todo = this.todosRepository.MarkTodoAsDone(id);

    if(!todo){
      throw new AppException(404, "To-Do not found");
    }

    return todo;
  }
}