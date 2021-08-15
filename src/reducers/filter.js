const { SHOW_ALL } = FILTERS;

export function filter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_FILTER:
    return action.filter;
  default:
    return state;
  }
}
