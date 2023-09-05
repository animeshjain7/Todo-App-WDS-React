import { useState } from "react";

export default function NewTodoForm({ addTodo, editableTodo }) {
  const [newItem, setNewItem] = useState("");

 

  function handleChange(e) {
    setNewItem(e.target.value);
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
        <button type="submit" className="button-add">
           Add
        </button>
      </form>
    </>
  );
}
