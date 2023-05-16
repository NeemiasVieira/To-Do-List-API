import { UsersRepository } from "../../repositories/UsersRepository.js";
import { AuthenticateUserController } from "./AuthenticateUserController.js";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase.js";

const usersRepository = UsersRepository.getInstance();

const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserController };
