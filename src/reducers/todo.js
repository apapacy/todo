import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/todo';

let initialState =[];
try {
  initialState = JSON.parse(window.sessionStorage.getItem('reduxStorage')).todo;
} catch(ex) {
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
      return state.map((task, index) => {
        if (index === action.index) {
          return { ...task, completed: true}
        } else {
          return task;
        }
      });
    case DELETE_TODO:
      return state.filter((task, index) => index !== action.index);
    default:
      return state;
  }
}

