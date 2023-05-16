import { TodosRepository } from "../../repositories/TodosRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";
import { prisma } from "../../../../database/PrismaClient.js";

export class UpdateTodoByIdUseCase{
  constructor(){
    this.todosRepository = TodosRepository.getInstance();
  }

  async execute(id, description, deadline ){

    prisma.$connect();

    const [day, month, year] = deadline.split("/");

    const todo = await prisma.todos.findUnique({where:{todoid: id}});

    if(todo){
    const updatedToDo = await prisma.todos.update({
      where: { todoid: id },
      data:{
        description,
        deadline: new Date(year, month-1, day),
      },
    });
    prisma.$disconnect();
    return updatedToDo;
  }

  else throw new AppException(404, "Todo not found.")
  
  }
}