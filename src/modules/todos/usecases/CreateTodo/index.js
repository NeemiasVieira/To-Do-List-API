import { CreateTodoController } from "./CreateTodoController.js";
import { CreateTodoUseCase } from "./CreateTodoUseCase.js";
import { TodosRepository } from "../../repositories/TodosRepository.js";


const todosRepository = TodosRepository.getInstance();

const createTodoUseCase = new CreateTodoUseCase(todosRepository);

const createTodoController = new CreateTodoController(createTodoUseCase);

export {createTodoController};