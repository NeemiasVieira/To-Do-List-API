import { AppException } from "../../../../application/errors/AppException.js";
import { UsersRepository } from "../../repositories/UsersRepository.js";

export class CreateUserUseCase{
  constructor(){
    this.usersRepository = UsersRepository.getInstance();
  }

  execute({name, username, email, password}){

    const UserAlreadyExists = this.usersRepository.findByUsername(username);
    const EmailAlreadyExists = this.usersRepository.findByEmail(email);

    if (UserAlreadyExists || EmailAlreadyExists){
      throw new AppException(400, "User already exists");
    }

  
    const user = this.usersRepository.create({name, username, email, password});

    return user;
  }
}