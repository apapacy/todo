import {
  LIST_TODO_START,
  LIST_TODO_SUCCESS,
  LIST_TODO_FAILURE,
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  COMPLETE_TODO_START,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_FAILURE,
  DELETE_TODO_START,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
} from '../actions/todoApi';

let initialState = {
  todo:[],
  inProgress: false,
  errorMessage: '',
};

export function todoApi(state = initialState, action) {
  let todo;
  switch (action.type) {
    case ADD_TODO_START:
      return {
        ...state,
        inProgress: true,
      };
    case ADD_TODO_SUCCESS:
      todo = [
        ...state.todo,
        {
          title: action.title,
          completed: false,
        },
      ];
      return {
        inProgress: false,
        errorMessage: '',
        todo,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        inProgress: false,
        errorMessage: 'add todo error',
      };
    case COMPLETE_TODO_START:
      return {
        ...state,
        inProgress: true,
      };
    case COMPLETE_TODO_SUCCESS:
      todo = state.map((task, index) => {
        if (index === action.index) {
          return { ...task, completed: true}
        } else {
          return task;
        }
      });
      return {
        inProgress: false,
        errorMessage: '',
        todo,
      };
    case COMPLETE_TODO_FAILURE:
      return {
        ...state,
        inProgress: false,
        errorMessage: 'complete todo error',
      };
    case DELETE_TODO_START:
      return {
        ...state,
        inProgress: true,
      };
    case DELETE_TODO_SUCCESS:
      todo = state.filter((task, index) => index !== action.index);
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        inProgress: false,
        errorMessage: 'delete todo error',
      };
    default:
      return state;
  }
}
