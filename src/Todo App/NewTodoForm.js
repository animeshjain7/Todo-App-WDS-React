import { useState } from "react";
import './style.css';

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleChange(r) {
    setNewItem(r.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-tag">
        <input
        className="input-tag"
          type="text"
          onChange={handleChange}
          value={newItem}
          placeholder="Add Item"
        />
        <button type="submit" className="button-add"> Add </button>
      </form>
    </>
  );
}
