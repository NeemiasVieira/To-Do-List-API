import { TodosRepository } from "../../repositories/TodosRepository.js"
import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { prisma } from "../../../../database/PrismaClient.js";
import { AppException } from "../../../../application/errors/AppException.js";
import { v4 as uuidv4 } from "uuid";


export class CreateTodoUseCase{
  constructor(){
    this.todosRepository = TodosRepository.getInstance();
    this.usersRepository = UsersRepository.getInstance();
  }
  async execute({description, username, done, deadline}){

    await prisma.$connect();

    const user = await prisma.users.findUnique({
      where: {
        username,
      }
    })

    if(!user){
      throw new AppException(400, "User not found.")
    }

    const [day, month, year] = deadline.split("/");
    const todo = await prisma.todos.create({
      data:{ //Apertar control espaço mostra as propiedades
        todoid: uuidv4(),
        description,
        username, 
        done: done ?? false,   //done === undefined ? false : done; (If Ternário)
        deadline: new Date(year, month-1, day),
        created_at: new Date()

      }
    })

    await prisma.$disconnect();

    return todo;
  }
}