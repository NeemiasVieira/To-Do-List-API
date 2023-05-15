import { UsersRepository } from "../../repositories/UsersRepository.js";
import { CreateUserController } from "./CreateUserController.js";
import { CreateUserUseCase } from "./CreateUserUseCase.js";

const usersRepository = UsersRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };