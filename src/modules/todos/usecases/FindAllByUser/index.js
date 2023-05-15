import { FindAllByUserController } from "./FindAllByUserController.js";
import { FindAllByUserUseCase } from "./FindAllByUserUseCase.js";
import { TodosRepository } from "../../repositories/TodosRepository.js";
import { UsersRepository } from "../../../users/repositories/UsersRepository.js";

const todosRepository = TodosRepository.getInstance();
const usersRepository = UsersRepository.getInstance();

const findAllByUserUseCase = new FindAllByUserUseCase(usersRepository, todosRepository);

const findAllByUserController = new FindAllByUserController(findAllByUserUseCase);

export { findAllByUserController }