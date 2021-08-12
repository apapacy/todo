import React, { useState } from 'react';

export const TodoWithProps = () => {
  const [state, changeState] = useState({
    title: 'To Do List',
    todos: [],
    value: ''
  });

  const handleChange = (event) => {
    changeState({
      ...state,
      value: event.target.value
    });
  }

  const handleClick = () => {
    changeState({
      ...state,
      todos: state.todos.concat([state.value]),
      value: '',
    });
  }
  return (
    <>
      <Title title={state.title}/>
      <TodoList todos={state.todos}/>
      <Input handleChange={handleChange} value={state.value}/>
      <Button handleClick={handleClick}/>
    </>
  );
}

const Title = ({ title }) => <h3>{ title }</h3>;
const TodoList = ({ todos }) => <ul>
    {
      todos.map(todo => <li key={todo}>{todo}</li>)
    }
  </ul>;
const Input = ({ value, handleChange }) => <input type="text" onChange={handleChange} value={value}/>;
const Button = ({ handleClick }) => <button onClick={handleClick}>add</button>;