import { UsersRepository } from "../../repositories/UsersRepository.js";
import { CreateUserUseCase} from "./CreateUserUseCase.js";

export class CreateUserController{
  constructor(){
    this.createUserUseCase = new CreateUserUseCase();
  }

  handle(request, response){
    const {name, username, email, password} = request.body;

    const user = this.createUserUseCase.execute({name, username, email, password});
    
    return response.json(user);
  }
}