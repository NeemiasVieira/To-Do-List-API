import { TodosRepository } from "../../repositories/TodosRepository.js";
import { MarkTodoAsDoneController} from "./MarkTodoAsDoneController.js";
import { MarkTodoAsDoneUseCase } from "./MarkTodoAsDoneUseCase.js";

const todosRepository = TodosRepository.getInstance();

const markTodoAsDoneUseCase = new MarkTodoAsDoneUseCase(todosRepository);

const markTodoAsDoneController = new MarkTodoAsDoneController(markTodoAsDoneUseCase);

export { markTodoAsDoneController }