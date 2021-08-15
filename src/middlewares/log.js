export const log = store => next => action => {
  console.log('before action ', action, store.getState());
  const result = next(action);
  console.log('after cation', action, store.getState())
}