import { CreateTodoUseCase } from './CreateTodoUseCase.js'

export class CreateTodoController {
  constructor(){
    this.createTodoUseCase = new CreateTodoUseCase();
  }

  handle(request, response){
    const {description, username, done, deadline} = request.body;

    const todo = this.createTodoUseCase.execute({description, username, done, deadline})

    response.status(201).json(todo);
  }
}