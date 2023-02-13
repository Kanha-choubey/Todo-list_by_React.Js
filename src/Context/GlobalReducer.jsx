const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };

    default:
      return state;
  }
};
export default GlobalReducer;
