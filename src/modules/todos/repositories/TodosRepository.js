import { Todo } from "../models/Todo.js";


export class TodosRepository{

  todos;

  static INSTANCE;

  static getInstance(){
    if (!TodosRepository.INSTANCE){
      TodosRepository.INSTANCE = new TodosRepository();
    }

    return TodosRepository.INSTANCE;
  }

  constructor(){
    this.todos = [];
  }

  create({description, username, done, deadline}){
    const todo = new Todo()

    Object.assign(todo, {description, username, done, deadline, created_at: new Date()})

    this.todos.push(todo);

    return todo;

  }

  FindAllByUsername(username){
    return this.todos.filter((todo) => todo.username == username);
  }

  FindById(id){
    const index = this.todos.findIndex((todo) => todo.id == id);
    const todo = this.todos[index];
    return todo;
  }

  MarkTodoAsDone(id){
    const index = this.todos.findIndex((todo) => todo.id == id);
    const todo = this.todos[index];
    if(todo) Object.assign(todo, {done: true});  
    return todo;
    
  }

  DeleteById(id){
    const index = this.todos.findIndex((todo) => todo.id == id);
    const todo = this.todos[index];
    this.todos.splice(index, 1);

    return todo;
  }

  UpdateTodo({id, description, deadline}){
    const index = this.todos.findIndex((todo) => todo.id == id );
    const todo = this.todos[index];
    Object.assign(todo, {description, deadline});

    return todo;   
    
  }
}