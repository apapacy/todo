import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from '../actions/todo';
import { setFilter } from '../actions/filter';

const TodoWithProps = ({todo, addTodo, deleteTodo, completeTodo, title}) => {
  const [value, changeValue] = useState('');

  function handleAddTodo() {
    addTodo(value);
    changeValue('');
  }

  return (
    <>
      <Title title={title}/>
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
        <li key={task.title} style={{ textDecoration: task.completed && 'line-through' }}>
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
    todo: state.todo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (...params) => dispatch(addTodo(...params)),
    completeTodo: (...params) => dispatch(completeTodo(...params)),
    deleteTodo: (...params) => dispatch(deleteTodo(...params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWithProps);
