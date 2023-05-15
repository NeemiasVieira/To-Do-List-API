import { DeleteTodoByIdController } from "./DeleteTodoByIdController.js";
import { DeleteTodoByIdUseCase } from "./DeleteTodoByIdUseCase.js";
import { TodosRepository } from "../../repositories/TodosRepository.js";

const todosRepository = TodosRepository.getInstance();

const deleteTodoByIdUseCase = new DeleteTodoByIdUseCase(todosRepository);

const deleteTodoByIdController = new DeleteTodoByIdController(deleteTodoByIdUseCase);

export { deleteTodoByIdController };