import { UsersRepository } from "../../repositories/UsersRepository.js";

export class ListUsersUseCase{
  constructor(){
    this.usersRepository = UsersRepository.getInstance();
  }

  async execute(){
    const users = await this.usersRepository.list();

    return users;
  }
}