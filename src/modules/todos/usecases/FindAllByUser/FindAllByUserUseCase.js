import { TodosRepository } from "../../repositories/TodosRepository.js";
import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";
import { prisma } from "../../../../database/PrismaClient.js";

export class FindAllByUserUseCase {
  constructor() {
    this.usersRepository = UsersRepository.getInstance();
    this.todosRepository = TodosRepository.getInstance();
  }

  async execute(user_id) {
    await prisma.$connect();

    const user = await prisma.users.findUnique({
      where: {
        userid: user_id,
      },
    });
    if (!user) {
      throw new AppException(404, "User not found!");
    }

    const todos = await prisma.todos.findMany({
      where: {
        username: user.username,
      },
    });

    await prisma.$disconnect();

    if (todos.length > 0) return todos.reverse();
    else return [{username: user.username}];
  }
}
