import { put, takeEvery,call } from 'redux-saga/effects'
import {
  LIST_TODO_START,
  LIST_TODO_SUCCESS,
  LIST_TODO_FAILURE,
  ADD_TODO_PUBLISH,
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

const apiHost = 'http://localhost:5001';

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout))

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* addTodo({title}) {
  try {
    yield delay(5000);
    const response = yield call(fetch, `${apiHost}/api/todos`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ title })
    });
    if (response.ok) {
      const responseJson = yield response.json()
      yield put({ ...responseJson, type: ADD_TODO_SUCCESS })
    } else {
      yield put({ type: ADD_TODO_FAILURE });
    }
  } catch (ex) {
    console.log(ex);
    yield put({ type: ADD_TODO_FAILURE });
  }
}

export function* watchAddTodo() {
  yield takeEvery('ADD_TODO_PUBLISH', addTodo)
}

export function* helloSaga() {
  console.log('Hello Sagas!')
}
