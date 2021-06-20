import { deleteTodo, updateTodo, changeReminder } from '../actions';
import types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.Add_Todo:
      return updateTodo(state, action.data);
    case types.Delete_Todo:
      return deleteTodo(state, action.data);
    case types.Update_Todo:
      return updateTodo(state, action.id, action.data);
    case types.Change_Reminder:
      return changeReminder(state, action.data);
    case types.Load_Todo:
      return [...state, ...action.data];
    default:
      return state;
  }
};
