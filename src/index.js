import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { helloSaga, watchAddTodo } from './sagas/hello'
import { reducers } from './reducers';
import { log } from './middlewares/log';
import { storage } from './middlewares/storage';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, {},  compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(log, storage, thunk, sagaMiddleware)
));

sagaMiddleware.run(watchAddTodo)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
