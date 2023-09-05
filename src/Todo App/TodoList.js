// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul className="ul-tag">
      {todos.length === 0 && "No Items"}
      {todos.map((it) => (
        <TodoItem
          {...it}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          key={it.id}
        />
      ))}
    </ul>
  );
}
