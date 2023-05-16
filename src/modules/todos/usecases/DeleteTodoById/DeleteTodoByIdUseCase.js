import { TodosRepository } from "../../repositories/TodosRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";
import { prisma } from "../../../../database/PrismaClient.js";

export class DeleteTodoByIdUseCase {
  constructor() {
    this.todosRepository = TodosRepository.getInstance();
  }
  async execute(id) {

    prisma.$connect();

    const todo = await prisma.todos.findUnique({where: {todoid: id}})

    if(todo){
      const deletedTodo = await prisma.todos.delete({where: {todoid: id}});
      prisma.$disconnect();
      return deletedTodo;
    } 
  
    else{
      throw new AppException(404, "To-Do not found :(");
    }

  }
}
