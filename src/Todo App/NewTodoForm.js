import { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={newItem}
          placeholder="Add Item"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
