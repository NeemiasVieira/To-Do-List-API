import { UsersRepository } from "../../repositories/UsersRepository.js";
import { prisma } from "../../../../database/PrismaClient.js";
export class ListUsersUseCase{
  constructor(){
    this.usersRepository = UsersRepository.getInstance();
  }

  async execute(){

    const users = await prisma.users.findMany()

    return users;
  }
}