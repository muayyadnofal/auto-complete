import { TodoDataSource } from "../TodoDataSource";
import { Todo } from "@/Domain/Model/Todo";
import { TodoAPIEntity } from "./Entity/TodoAPIEntity";
import { baseApiURL } from "@/Core/constants/app.const";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

class TodoAPIDataSourceImpl implements TodoDataSource {
  async getTodos(): Promise<Todo[]> {
    const response = await myFetch<TodoAPIEntity[]>(`${baseApiURL}/todos`);
    let data = await response.json();
    return data.map((item) => ({
      value: item.id,
      label: item.title,
    }));
  }
}

export default TodoAPIDataSourceImpl;
