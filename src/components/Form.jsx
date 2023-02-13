import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../Context/GlobalContext";

function Form() {
  const { saveTodo, edit } = useContext(GlobalContext);

  const [text, setText] = useState("");

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  //  handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(text);
    setText("");
  };

  return (
    <form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <input
          type="text"
          value={text}
          className="form-control rounded-0"
          required
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 rounded-0">
        Submit
      </button>
    </form>
  );
}

export default Form;
