import { TodosRepository } from "../../repositories/TodosRepository.js"


export class CreateTodoUseCase{
  constructor(){
    this.todosRepository = TodosRepository.getInstance();
  }
  execute({description, username, done, deadline}){

    const [day, month, year] = deadline.split("/");
    const todo = this.todosRepository.create({
      description,
      username,
      done,
      deadline: new Date(year, month-1, day)
  })
    return todo;
  }
}