import TodoAPIDataSourceImpl from "@/Data/API/TodoDataSourceImpl";
import { Todo } from "@/Domain/Model/Todo";

export interface GetTodos {
  invoke(): Promise<Todo[]>;
}

export class GetTodosUseCase implements GetTodos {
  private todo: TodoAPIDataSourceImpl;

  constructor(_todo: TodoAPIDataSourceImpl) {
    this.todo = _todo;
  }

  async invoke(): Promise<Todo[]> {
    return this.todo.getTodos();
  }
}
