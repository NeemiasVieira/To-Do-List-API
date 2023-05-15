import { MarkTodoAsDoneUseCase } from "./MarkTodoAsDoneUseCase.js";

export class MarkTodoAsDoneController{
  constructor(){
    this.markTodoAsDoneUseCase = new MarkTodoAsDoneUseCase();
  }

  handle(request, response){
    const {id} = request.params;
    const todo = this.markTodoAsDoneUseCase.execute(id);
    return response.status(200).json(todo);
  }
}