export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(title) {
  return { type: ADD_TODO, title };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function deleteTodo(index) {
  return { type: DELETE_TODO, index };
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter };
}
