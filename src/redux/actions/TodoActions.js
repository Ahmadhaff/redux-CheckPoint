import { ADD_TODO, DELETE_TODO, UPDATE_TODO, COMPLETE_TODO,DELETE_COMPLETED_TODOS } from '../types/Types';

export const addTodo = (todo,id) => ({
  type: ADD_TODO,
  payload: todo,id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const completeTodo = (todo) => ({
  type: COMPLETE_TODO,
  payload: todo,
});

export const deleteCompletedTodos = (id) => ({
  type: DELETE_COMPLETED_TODOS,
  payload: id,
});



