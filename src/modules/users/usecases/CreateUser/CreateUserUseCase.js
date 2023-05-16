import { AppException } from "../../../../application/errors/AppException.js";
import { UsersRepository } from "../../repositories/UsersRepository.js";
import { prisma } from "../../../../database/PrismaClient.js";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

export class CreateUserUseCase{
  constructor(){
    this.usersRepository = UsersRepository.getInstance();
  }

  async execute({name, username, email, password}){

    prisma.$connect();

    const UserAlreadyExists = await prisma.users.findUnique({
      where:{
        username,
      },
    });

    const EmailAlreadyExists = await prisma.users.findUnique({
      where:{
        email,
      },
    });

    if (UserAlreadyExists || EmailAlreadyExists){
      throw new AppException(400, "User already exists");
    }

    const passwordHash = await hash(password, Number(process.env.PASSWORD_SALT));

  
    const user = await prisma.users.create({
      data:{
        userid: uuidv4(),
        email,
        password: passwordHash,
        username,
        name,
        created_at: new Date()
      }
    })

    prisma.$disconnect();

    return user;
  }
}