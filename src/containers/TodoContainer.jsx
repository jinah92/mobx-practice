import { inject, observer } from "mobx-react";
import Todo from "../components/Todo";

const TodoContainer = ({ todoStore }) => {
  console.log(todoStore);
  const todos = todoStore.todos;
  return <Todo todos={todos} />;
};

export default inject("todoStore")(observer(TodoContainer));
