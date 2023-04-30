import "./style.css";

export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="button-delete" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
