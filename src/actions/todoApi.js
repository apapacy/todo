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

const apiHost = 'http://localhost:5001'

export function listTodo(title) {
  return function(dispatch) {
    dispatch({ type: LIST_TODO_START, title });
    fetch(`${apiHost}/api/todos`, {
      credentials: 'include',
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(responseJson => dispatch({ todo: responseJson, type: LIST_TODO_SUCCESS }))
      .catch(error => {
        console.log(error);
        dispatch({ type: LIST_TODO_FAILURE })
      });
  }
}

export function addTodo(title) {
  return function(dispatch) {
    dispatch({ type: ADD_TODO_START, title });
    // window.setTimeout(() => dispatch({ type: ADD_TODO_FAILURE, title}), 5000);
    fetch(`${apiHost}/api/todos`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ title })
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(responseJson => dispatch({ ...responseJson, type: ADD_TODO_SUCCESS }))
      .catch(error => {
        console.log(error);
        dispatch({ type: ADD_TODO_FAILURE })
      });
  }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO_START, index };
}

export function deleteTodo(index) {
  return { type: DELETE_TODO_START, index };
}
