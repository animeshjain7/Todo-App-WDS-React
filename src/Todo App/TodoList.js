import TodoItem from "./TodoItem";
import './style.css';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="ul-tag">
      {todos.length === 0 && "No Items"}
      {todos.map((it) => {
        return (
          <TodoItem
            // title={it.title}
            // id={it.id}
            // completed={it.completed}
            {...it}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={it.id}
          />
        );
      })}
    </ul>
  );
}
