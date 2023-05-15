import { TodosRepository } from "../../repositories/TodosRepository.js";
import { UpdateTodoByIdUseCase } from "./UpdateTodoByIdUseCase.js";
import { UpdateTodoByIdController } from "./UpdateTodoByIdController.js";

const todosRepository = TodosRepository.getInstance();

const updateTodoByIdUseCase = new UpdateTodoByIdUseCase(todosRepository);

const updateTodoByIdController = new UpdateTodoByIdController(updateTodoByIdUseCase);

export { updateTodoByIdController }