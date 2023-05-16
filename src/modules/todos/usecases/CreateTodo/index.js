import { CreateTodoController } from "./CreateTodoController.js";
import { CreateTodoUseCase } from "./CreateTodoUseCase.js";
import { TodosRepository } from "../../repositories/TodosRepository.js";
import { UsersRepository } from "../../../users/repositories/UsersRepository.js";

const usersRepository = UsersRepository.getInstance();
const todosRepository = TodosRepository.getInstance();

const createTodoUseCase = new CreateTodoUseCase(todosRepository, usersRepository);

const createTodoController = new CreateTodoController(createTodoUseCase);

export {createTodoController};