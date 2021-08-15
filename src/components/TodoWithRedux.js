import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from '../actions/todo';
import { setFilter } from '../actions/filter';

const TodoWithProps = ({todo, addTodo, deleteTodo, title}) => {
  const [state, changeState] = useState({
    value: ''
  });

  function changeValue(value) {
    changeState({
      ...state,
      value,
    });
  }

  function handleAddTodo() {
    addTodo(state.value);
    changeValue('');
  }

  return (
    <>
      <Title title={title}/>
      <TodoList todo={todo} deleteTodo={deleteTodo}/>
      <Input changeValue={changeValue} value={state.value}/>
      <Button addTodo={handleAddTodo}/>
    </>
  );
}

const Title = ({ title }) => <h3>{ title }</h3>;

const TodoList = ({ todo, deleteTodo }) => 
  <ul>
    {
      todo.map((task, index) => <li key={index}>{task.title}<button onClick={() => deleteTodo(index)}>delete</button></li>)
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
    todo: state.todo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (...params) => dispatch(addTodo(...params)),
    deleteTodo: (...params) => dispatch(deleteTodo(...params))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWithProps);