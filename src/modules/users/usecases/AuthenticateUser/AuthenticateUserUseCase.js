import { UsersRepository } from "../../repositories/UsersRepository.js";
import { prisma } from "../../../../database/PrismaClient.js";
import { AppException } from "../../../../application/errors/AppException.js";
import pkg from "jsonwebtoken";
const { sign } = pkg;
import { compare } from "bcrypt";

export class AuthenticateUserUseCase{
  constructor(){
    this.usersRepository = UsersRepository.getInstance();
  }

  async execute(username, password){

    prisma.$connect();

    const user = await prisma.users.findUnique({where: {username}})

    prisma.$disconnect();   

    if(!user) throw new AppException(400 , "Username or password incorrect.")


    // const passwordMatch = user.password == passwordHash ? true : false;
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) throw new AppException(400 , "Username or password incorrect.")
   

    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.userid,
      expiresIn: "1d",
    });


    return {
      token,
      user:{
        name: user.name,
        username: user.username,
        email: user.email,
      }
    }

  }
}