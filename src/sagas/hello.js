import { put, takeEvery } from 'redux-saga/effects'
import {
  LIST_TODO_START,
  LIST_TODO_SUCCESS,
  LIST_TODO_FAILURE,
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



const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync(...props) {
  console.log(props);
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchAddTodo() {
  console.log('watch add todo')
  yield takeEvery('ADD_TODO_START', incrementAsync)
}

export function* helloSaga() {
  console.log('Hello Sagas!')
}
