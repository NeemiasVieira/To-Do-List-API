import { TodosRepository } from "../../repositories/TodosRepository.js";
import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";
import { prisma } from "../../../../database/PrismaClient.js";

export class FindAllByUserUseCase {
  constructor() {
    this.usersRepository = UsersRepository.getInstance();
    this.todosRepository = TodosRepository.getInstance();
  }

  async execute(username) {
    prisma.$connect();

    const user = await prisma.users.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      throw new AppException(404, "User not found!");
    }

    const todos = await prisma.todos.findMany({
      where: {
        username,
      },
    });

    prisma.$disconnect();

    return todos;
  }
}
