import { User } from "../models/User.js";

export class UsersRepository {

  users;

  static INSTANCE;

  constructor(){
    this.users= [];
  }

  static getInstance(){
    if(!UsersRepository.INSTANCE){
      UsersRepository.INSTANCE = new UsersRepository();
    }
    
    return UsersRepository.INSTANCE;
  }

  create({name, username, email, password}){

    const user = new User();

    Object.assign(user, {name, username, email, password, created_at: new Date()});

    this.users.push(user);

    return user;

  }

  list(){
    return this.users;
  }

  findByUsername(username){
    return this.users.find(user => user.username == username)
  }

  findByEmail(email){
    return this.users.find(user => user.email == email)
  }
}