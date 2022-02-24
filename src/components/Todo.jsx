import { observer } from "mobx-react";

export default observer(function Todo({ todos }) {
  if (todos.length === 0) {
    return <div>할일 없음</div>;
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
});
