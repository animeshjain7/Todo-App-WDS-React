import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from './TodoList';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((it) => {
        if (it.id === id) {
          return { ...it, completed };
        }
        return it;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((it) => it.id !== id);
    });
  }
  return (
    <>
      <h1>TODO App</h1>
      <NewTodoForm onSubmit={addTodo} />
      <h3>List</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}  ></TodoList>
    </>
  );
}
