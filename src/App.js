import logo from './logo.svg';
import './App.css';
import { TodoStateFull } from './components/TodoStateFull';
import { TodoStateLess } from './components/TodoStateLess';
import { TodoWithProps } from './components/TodoWithProps'

function App() {
  return (
    <>
      <TodoStateFull/>
      <TodoStateLess/>
      <TodoWithProps/>
    </>
  );
}

export default App;
