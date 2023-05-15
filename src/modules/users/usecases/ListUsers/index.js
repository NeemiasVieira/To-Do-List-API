import { UsersRepository } from "../../repositories/UsersRepository.js";
import { ListUsersController } from "./ListUsersController.js";
import { ListUsersUseCase } from "./ListUsersUseCase.js";

const usersRepository = UsersRepository.getInstance();

const listUsersUseCase = new ListUsersUseCase(usersRepository);

const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController };