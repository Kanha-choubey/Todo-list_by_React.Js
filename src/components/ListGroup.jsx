import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";
import ListItem from "./ListItem";

function ListGroup() {
  const { todos } = useContext(GlobalContext);

  return (
    <ul className="list-group mt-5">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default ListGroup;
