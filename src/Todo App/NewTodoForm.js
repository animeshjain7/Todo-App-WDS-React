import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleChange(r) {
    setNewItem(r.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

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
