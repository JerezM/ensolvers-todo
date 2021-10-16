import { combineReducers } from "redux";
import todoItemReducer from "./todo-items-reducer";

const reducers = combineReducers({
  items: todoItemReducer,
});

export default reducers;
