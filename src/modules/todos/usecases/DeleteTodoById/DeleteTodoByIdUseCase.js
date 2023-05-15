import { TodosRepository } from "../../repositories/TodosRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";

export class DeleteTodoByIdUseCase {
  constructor() {
    this.todosRepository = TodosRepository.getInstance();
  }
  async execute(id) {
    const todo = await this.todosRepository.DeleteById(id);

    if (!todo) {
      throw new AppException(404, "To-Do not found :(");
    }
    return todo;
  }
}
