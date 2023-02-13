import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import { v4 as uuidv4 } from "uuid";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const initialState = {
    todos: [],
    edit: {
      todo: {},
      isEdit: false,
    },
  };
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // save todo
  const saveTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      text: todo,
    };
    dispatch({
      type: "SAVE_TODO",
      payload: newTodo,
    });
  };
  //   delete data
  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  //   edit todo
  const editTodo = (item) => {
    dispatch({
      type: "EDIT_TODO",
      payload: item,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        saveTodo,
        deleteTodo,
        editTodo,
        edit: state.edit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
