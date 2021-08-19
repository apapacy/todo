import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo, listTodo } from '../actions/todoApi';
import { setFilter } from '../actions/filter';

const TodoWithReduxThunk = ({todo, addTodo, deleteTodo, completeTodo, listTodo, title, inProgress, errorMessage}) => {
  const [value, changeValue] = useState('');

  useEffect(() => listTodo(), []);

  function handleAddTodo() {
    addTodo(value);
    changeValue('');
  }

  return (
    <>
      <Title title={title}/>
      <div>{inProgress ? 'Request in process...' : ''}</div>
      <div>{errorMessage}</div>
      <TodoList todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
      <Input changeValue={changeValue} value={value}/>
      <Button addTodo={handleAddTodo}/>
    </>
  );
}

const Title = ({ title }) => <h3>{ title }</h3>;

const TodoList = ({ todo, deleteTodo, completeTodo }) =>
  <ul>
    {
      todo.map((task, index) =>
        <li key={task.id} style={{ textDecoration: task.completed && 'line-through' }}>
          {task.title}
          <button onClick={() => completeTodo(index)}>done</button>
          <button onClick={() => deleteTodo(index)}>delete</button>
        </li>)
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
    todo: state.todoApi.todo,
    inProgress: state.todoApi.inProgress,
    errorMessage: state.todoApi.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listTodo: (...params) => dispatch(listTodo(...params)),
    addTodo: (...params) => dispatch(addTodo(...params)),
    completeTodo: (...params) => dispatch(completeTodo(...params)),
    deleteTodo: (...params) => dispatch(deleteTodo(...params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWithReduxThunk);
