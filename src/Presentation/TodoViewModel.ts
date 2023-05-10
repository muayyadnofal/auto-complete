import TodoAPIDataSourceImpl from "@/Data/API/TodoDataSourceImpl";
import { Todo } from "@/Domain/Model/Todo";
import { GetTodosUseCase } from "@/Domain/UseCase/Todo/GetTodos";
import { useState } from "react";

export default function TodoViewModel() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const UseCase = new GetTodosUseCase(new TodoAPIDataSourceImpl());

  async function getTodos() {
    setLoading(true);
    setTodos(await UseCase.invoke());
    setLoading(false);
  }

  return {
    getTodos,
    todos,
    isLoading,
  };
}
