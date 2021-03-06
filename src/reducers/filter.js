import { FILTERS } from '../actions/filter'
const { SHOW_ALL, SET_FILTER } = FILTERS;

export function filter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_FILTER:
    return action.filter;
  default:
    return state;
  }
}
