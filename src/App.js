import logo from './logo.svg';
import './App.css';
import { TodoStateFull } from './components/TodoStateFull';
import { TodoStateLess } from './components/TodoStateLess';
import { TodoWithProps } from './components/TodoWithProps'
import TodoWithRedux from './components/TodoWithRedux';
import TodoWithReduxThunk from './components/TodoWithReduxThunk';
import TodoWithReduxSaga from './components/TodoWithReduxSaga';

function App() {
  return (
    <>
      <TodoStateFull/>
      <TodoStateLess/>
      <TodoWithProps/>
      <TodoWithRedux title="To Do With Redux"/>
      <TodoWithReduxThunk title="To Do With Redux Thunk"/>
      <TodoWithReduxThunk title="To Do With Redux Saga"/>
    </>
  );
}

export default App;
