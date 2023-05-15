import { TodosRepository } from "../../repositories/TodosRepository.js";
import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";

export class FindAllByUserUseCase{
  constructor(){
    this.usersRepository = UsersRepository.getInstance();
    this.todosRepository = TodosRepository.getInstance();
  }
  async execute(username){
    const user = await this.usersRepository.findByUsername(username);

    if(!user){
      throw new AppException(404, "User not found!");
    }

    const todos = this.todosRepository.FindAllByUsername(user.username);
    return todos;
  }
}