import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from '../actions/todo';
import { setFilter } from '../actions/filter';

const TodoWithProps = ({todos, addTodo, deleteTodo, title}) => {
  const [state, changeState] = useState({
    value: ''
  });

  const changeValue = (value) => {
    changeState({
      ...state,
      value,
    });
  }

  const handleAddTodo = () => {
    addTodo(state.value);
    changeValue('');
  }

  return (
    <>
      <Title title={title}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <Input changeValue={changeValue} value={state.value}/>
      <Button addTodo={handleAddTodo}/>
    </>
  );
}

const Title = ({ title }) => <h3>{ title }</h3>;

const TodoList = ({ todos, deleteTodo }) => 
  <ul>
    {
      todos.map((todo, index) => <li key={index}>{todo.title}<button onClick={() => deleteTodo(index)}>delete</button></li>)
    }
  </ul>;

const Input = ({ value, changeValue }) => {
  const handleChange = (event) => {
    changeValue(event.target.value);
  };
  return <input type="text" onChange={handleChange} value={value}/>;
};

const Button = ({ addTodo }) => <button onClick={addTodo}>add</button>;

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