export class AppException{
  statusCode;
  message;

  constructor(statusCode, message){
    this.statusCode = statusCode;
    this.message = message;
  }
}