import { UsersRepository } from "../../repositories/UsersRepository.js";
import { CreateUserUseCase} from "./CreateUserUseCase.js";

export class CreateUserController{
  constructor(){
    this.createUserUseCase = new CreateUserUseCase();
  }

  async handle(request, response){
    const {name, username, email, password} = request.body;

    const user = await this.createUserUseCase.execute({name, username, email, password});
    
    return response.status(201).json(user);
  }
}