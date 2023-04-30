import "./style.css";

export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li className="li-tag">
      <input
        id={id}
        className="checkbox-input"
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id}>
        <div className="content-list">{title}</div>
      </label>
      <button className="button-delete" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
