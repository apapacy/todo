import logo from './logo.svg';
import './App.css';
import { TodoStateFull } from './components/TodoStateFull';
import { TodoStateLess } from './components/TodoStateLess';

function App() {
  return (
    <>
      <TodoStateFull/>
      <TodoStateLess/>
    </>
  );
}

export default App;
