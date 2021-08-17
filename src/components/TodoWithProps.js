import React, { useState } from 'react';

export const TodoWithProps = () => {
  const [state, changeState] = useState({
    title: 'To Do List',
    todo: [],
    value: ''
  });

  const changeValue = (value) => {
    changeState({
      ...state,
      value
    });
  }

  const addTodo = () => {
    changeState({
      ...state,
      todo: state.todo.concat(state.value),
      value: '',
    });
  }

  return (
    <>
      <Title title={state.title}/>
      <TodoList todo={state.todo}/>
      <Input changeValue={changeValue} value={state.value}/>
      <Button addTodo={addTodo}/>
    </>
  );
}

const Title = ({ title }) => <h3>{ title }</h3>;

const TodoList = ({ todo }) =>
  <ul>
    {
      todo.map(task => <li key={task}>{task}</li>)
    }
  </ul>;

const Input = ({ value, changeValue }) => {
  const handleChange = (event) => {
    changeValue(event.target.value);
  };
  return <input type="text" onChange={handleChange} value={value}/>;
};

const Button = ({ addTodo }) => <button onClick={addTodo}>add</button>;
