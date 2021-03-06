const { createStore } = require('redux');

const initialState = {
  value: 0,
  updatedAt: new Date(),
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1, updatedAt: action.updatedAt };
    case 'counter/decremented':
      return { value: state.value - 1, updatedAt: action.updatedAt };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

console.log(store.getState());

store.dispatch({ type: 'counter/incremented', updatedAt: new Date() });
store.dispatch({ type: 'counter/incremented', updatedAt: new Date() });
store.dispatch({ type: 'counter/decremented', updatedAt: new Date() });
