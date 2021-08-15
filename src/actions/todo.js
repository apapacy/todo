export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(title) {
  return { type: ADD_TODO, title };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function deleteTodo(index) {
  return { type: DELETE_TODO, index };
}
