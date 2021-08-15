import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/todo';

let initialState;
try {
  initialState = JSON.parse(window.sessionStorage.getItem('reduxStorage')).todo;
} catch(ex) {
  initialState = []
  console.log(ex);
}

export function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          completed: false,
        },
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index],
        {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    case DELETE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
     ];
    default:
      return state;
  }
}

