import logo from './logo.svg';
import './App.css';
import { TodoStateFull } from './components/TodoStateFull';
import { TodoStateLess } from './components/TodoStateLess';
import { TodoWithProps } from './components/TodoWithProps'
import TodoWithRedux from './components/TodoWithRedux';

function App() {
  return (
    <>
      <TodoStateFull/>
      <TodoStateLess/>
      <TodoWithProps/>
      <TodoWithRedux title="To Do With Redux"/>
    </>
  );
}

export default App;
