import {combineReducers} from 'redux';
import { todo } from './todo';
import { filter } from './filter';

export const reducers = combineReducers({
  todo,
  filter,
});
