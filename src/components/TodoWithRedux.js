import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo, setFilter } from '../redux/actions'

const TodoWithProps = ({todos, addTodo, deleteTodo, title}) => {
  const [state, changeState] = useState({
    value: ''
  });

  const handleChange = (event) => {
    changeState({
      ...state,
      value: event.target.value
    });
  }

  const handleClick = () => {
    addTodo(state.value);
  }
  return (
    <>
      <Title title={title}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <Input handleChange={handleChange} value={state.value}/>
      <Button handleClick={handleClick}/>
    </>
  );
}

const Title = ({ title }) => <h3>{ title }</h3>;
const TodoList = ({ todos, deleteTodo }) => <ul>
    {
      todos.map((todo, index) => <li key={todo.title}>{todo.title}<button onClick={() => deleteTodo(index)}>delete</button></li>)
    }
  </ul>;
const Input = ({ value, handleChange }) => <input type="text" onChange={handleChange} value={value}/>;
const Button = ({ handleClick }) => <button onClick={handleClick}>add</button>;

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (...params) => dispatch(addTodo(...params)),
    deleteTodo: (...params) => dispatch(deleteTodo(...params))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWithProps);