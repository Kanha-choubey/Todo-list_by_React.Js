import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

function ListItem({ todo }) {
  const { deleteTodo, editTodo } = useContext(GlobalContext);

  return (
    <li className="list-group-item rounded-0">
      {todo.text}
      <button
        className="btn btn-danger btn-sm rounded-0 float-end ml-1"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-primary btn-sm rounded-0 float-end"
        onClick={() => editTodo(todo)}
      >
        Edit
      </button>
    </li>
  );
}

export default ListItem;
