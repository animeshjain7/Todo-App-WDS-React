import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
 

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((it) => {
        if (it.id === id) {
          return { ...it, completed };
        }
        return it;
      })
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }


  return (
    <>
      <h1>TODO LIST App In REACT</h1>
      <NewTodoForm addTodo={addTodo} />
      <h3>List</h3>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
