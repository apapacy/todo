export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
export const COMPLETE_TODO_START = 'COMPLETE_TODO_START';
export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS';
export const COMPLETE_TODO_FAILURE = 'COMPLETE_TODO_FAILURE';
export const DELETE_TODO_START = 'DELETE_TODO_START';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';
export const LIST_TODO_START = 'LIST_TODO_START';
export const LIST_TODO_SUCCESS = 'LIST_TODO_SUCCESS';
export const LIST_TODO_FAILURE = 'LIST_TODO_FAILURE';

export function listTodo(title) {
  return { type: LIST_TODO_SUCCESS, title };
}

export function addTodo(title) {
  return function(dispatch) {
    dispatch({ type: ADD_TODO_START, title });
    window.setTimeout(() => dispatch({ type: ADD_TODO_FAILURE, title}), 5000);
  }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO_START, index };
}

export function deleteTodo(index) {
  return { type: DELETE_TODO_START, index };
}
