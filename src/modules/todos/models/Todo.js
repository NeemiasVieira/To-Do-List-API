import { v4 as uuidv4 } from "uuid";

export class Todo {
  id;
  description;
  username;
  done;
  deadline;
  created_at;

  constructor() {
    if(!this.id){
      this.id = uuidv4();
    }
    
  }
}
