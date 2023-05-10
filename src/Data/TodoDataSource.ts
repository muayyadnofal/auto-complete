import { Todo } from "@/Domain/Model/Todo";

export interface TodoDataSource {
  getTodos(): Promise<Todo[]>;
}
