import React, { useState } from 'react';

export const TodoStateLess = () => {
  const [state, changeState] = useState({
    title: 'To Do List',
    todo: [],
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
      todo: state.todo.concat(state.value),
      value: '',
    });
  }

  return (
    <>
      <h3>{state.title}</h3>
      <ul>
        {
          state.todo.map(task => <li key={task}>{task}</li>)
        }
      </ul>
      <input type="text" onChange={handleChange} value={state.value}/>
      <button onClick={handleClick}>add</button>
    </>
  );
}
