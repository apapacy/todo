export const storage = store => next => action => {
  const result = next(action);
  window.sessionStorage.setItem('reduxStorage', JSON.stringify(store.getState()));
  return result;
}