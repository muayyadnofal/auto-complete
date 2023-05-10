import useViewModel from "./TodoViewModel";
import { Autocomplete } from "@/Core/components";

function AsyncAutocomplete() {
  const { getTodos, todos, isLoading } = useViewModel();

  return (
    <Autocomplete
      onInit={getTodos}
      options={todos}
      loading={isLoading}
    />
  );
}

export default AsyncAutocomplete;
