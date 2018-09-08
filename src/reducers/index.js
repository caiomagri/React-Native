import { combineReducers } from "redux";
import todoListReducer from "./todoListReducer";
import editingTodoReducer from "./editingTodoReducer";

export default combineReducers({
    todos: todoListReducer,
    editingTodo: editingTodoReducer
});
