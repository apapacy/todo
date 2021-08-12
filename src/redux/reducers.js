import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, SET_FILTER, FILTERS } from './actions';
const { SHOW_ALL } = FILTERS;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
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

export const reducers = combineReducers({
  visibilityFilter,
  todos
});
