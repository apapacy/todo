import React, { useState } from 'react';

export const TodoStateLess = () => {
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
      <h3>{state.title}</h3>
      <ul>
        {
          state.todos.map(todo => <li key={todo}>{todo}</li>)
        }
      </ul>
      <input type="text" onChange={handleChange} value={state.value}/>
      <button onClick={handleClick}>test</button>
    </>
  );
}