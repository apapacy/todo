import React, { useState } from 'react';

export const TodoWithProps = () => {
  const [state, changeState] = useState({
    title: 'To Do List',
    todos: [],
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
      todos: state.todos.concat(state.value),
      value: '',
    });
  }

  return (
    <>
      <Title title={state.title}/>
      <TodoList todos={state.todos}/>
      <Input changeValue={changeValue} value={state.value}/>
      <Button addTodo={addTodo}/>
    </>
  );
}

const Title = ({ title }) => <h3>{ title }</h3>;

const TodoList = ({ todos }) =>
  <ul>
    {
      todos.map(todo => <li key={todo}>{todo}</li>)
    }
  </ul>;

const Input = ({ value, changeValue }) => {
  const handleChange = (event) => {
    changeValue(event.target.value);
  };
  return <input type="text" onChange={handleChange} value={value}/>;
};

const Button = ({ addTodo }) => <button onClick={addTodo}>add</button>;