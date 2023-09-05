
import React, { useState } from 'react';
import './style.css';
export default function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setNewTitle(newTitle);
    setIsEditing(false);
  };

  return (
    <li className="li-tag">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id, !completed)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <label htmlFor={id}>{newTitle}</label>
      )}
      <button onClick={handleEditClick}>Edit</button>
      {isEditing
        ? (<button onClick={handleSaveClick}>Save</button>)
        : (<button className="button-delete" onClick={() => deleteTodo(id)}> Delete</button>)
      }
    </li>
  );
}
