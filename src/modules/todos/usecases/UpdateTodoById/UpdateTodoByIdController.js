import { UpdateTodoByIdUseCase } from "./UpdateTodoByIdUseCase.js";

export class UpdateTodoByIdController {
  constructor() {
    this.updateTodoByIdUseCase = new UpdateTodoByIdUseCase();
  }

  handle(request, response) {
    const { id } = request.params;
    const { description, deadline } = request.body;

    const todo = this.updateTodoByIdUseCase.execute(id, description, deadline);

    return response.status(200).json(todo);
  }
}
