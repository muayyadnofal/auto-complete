import ApiService from "@/Core/utils/base-api/APIService";
import { TodoDataSource } from "../TodoDataSource";
import { Todo } from "@/Domain/Model/Todo";
import { TodoAPIEntity } from "./Entity/TodoAPIEntity";

class TodoAPIDataSourceImpl extends ApiService implements TodoDataSource {
  constructor() {
    super({ baseURL: "/todos" });
  }

  async getTodos(): Promise<Todo[]> {
    const data = await this.get<Promise<TodoAPIEntity[]>>("");
    return data.map((item) => ({
      value: item.id,
      label: item.title,
    }));
  }
}

export default TodoAPIDataSourceImpl;
