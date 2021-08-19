import {combineReducers} from 'redux';
import { todo } from './todo';
import { todoApi } from './todoApi';
import { filter } from './filter';

export const reducers = combineReducers({
  todo,
  todoApi,
  filter,
});
