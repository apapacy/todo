export const SET_FILTER = 'SET_FILTER';

export const FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function setFilter(filter) {
  return { type: SET_FILTER, filter };
}
