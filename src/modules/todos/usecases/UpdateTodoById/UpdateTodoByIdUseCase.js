import { TodosRepository } from "../../repositories/TodosRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";

export class UpdateTodoByIdUseCase{
  constructor(){
    this.todosRepository = TodosRepository.getInstance();
  }

  execute(id, description, deadline ){
    const todo = this.todosRepository.FindById(id);

    if(!todo){
      throw new AppException(404, "To-Do not found.")
    }

    const [day, month, year] = deadline.split("/");

    const updatedToDo = this.todosRepository.UpdateTodo({
      id,
      description,
      deadline: new Date(year, month-1, day),
    });

    return updatedToDo;
  }
}