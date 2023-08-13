import { TodosRepository } from "../../repositories/TodosRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";
import { prisma } from "../../../../database/PrismaClient.js";

export class MarkTodoAsDoneUseCase {
  constructor() {
    this.todosRepository = TodosRepository.getInstance();
  }

  async execute(id) {
    prisma.$connect();

    const todo = await prisma.todos.findUnique({ where: { todoid: id } });

    if (todo) {
      let Updatedtodo;
      if(todo.done){
        Updatedtodo = await prisma.todos.update({
          where: { todoid: id },
          data: { done: false },
        });
      }
      else{
        Updatedtodo = await prisma.todos.update({
          where: {todoid: id},
          data: { done: true},
        })
      }
      
      prisma.$disconnect();
      return Updatedtodo;
    } 
    
    else throw new AppException(404, "To-Do not found");
    
  }
}
