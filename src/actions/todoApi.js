export const ADD_TODO_PUBLISH = 'ADD_TODO_PUBLISH';

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

const apiHost = 'http://alpha.branderstudio.com:5001'

export function listTodo() {
  return function(dispatch) {
    dispatch({ type: LIST_TODO_START });
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

export function addTodoStart(title) {
  return { type: ADD_TODO_PUBLISH, title, completed: false };
}

export function addTodo(title) {
  return function(dispatch) {
    dispatch({ type: ADD_TODO_START, title, completed: false });
    // window.setTimeout(() => dispatch({ t,ype: ADD_TODO_FAILURE, title}), 5000);
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

export function completeTodo(id) {
  return function(dispatch) {
    dispatch({ type: COMPLETE_TODO_START });
    // window.setTimeout(() => dispatch({ type: ADD_TODO_FAILURE, title}), 5000);
    fetch(`${apiHost}/api/todos/${id}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ completed: true })
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(responseJson => dispatch({ ...responseJson, type: COMPLETE_TODO_SUCCESS }))
      .catch(error => {
        console.log(error);
        dispatch({ type: COMPLETE_TODO_FAILURE })
      });
  }
}

export function deleteTodo(id) {
  return function(dispatch) {
    dispatch({ type: DELETE_TODO_START });
    // window.setTimeout(() => dispatch({ type: ADD_TODO_FAILURE, title}), 5000);
    fetch(`${apiHost}/api/todos/${id}`, {
      credentials: 'include',
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        dispatch({ id, type: DELETE_TODO_SUCCESS });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: DELETE_TODO_FAILURE })
      });
  }
}
