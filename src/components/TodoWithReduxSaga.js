import styles from './Component.module.scss';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodoStart, completeTodo, deleteTodo, listTodo } from '../actions/todoApi';
import { setFilter } from '../actions/filter';
import styled from 'styled-components';
 
const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid #1a202c;
  padding: 8px;
  min-width: 64px;
 
  background: transparent;
 
  transition: all 0.1s ease-in;
 
  &:hover {
    background: #1a202c;
    color: #ffffff;
  }
`;

const TodoWithReduxSaga = ({todo, addTodo, deleteTodo, completeTodo, listTodo, title, inProgress, errorMessage}) => {
  const [value, changeValue] = useState('');
  useEffect(() => listTodo(), []);

  function handleAddTodo() {
    addTodo(value);
    changeValue('');
  }

  return (
    <>
      <Title title={title} count={todo?.length}/>
      <div>{inProgress ? 'Request in process...' : ''}</div>
      <div>{errorMessage}</div>
      <TodoList todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
      <Input changeValue={changeValue} value={value}/>
      <Button addTodo={handleAddTodo}/>
    </>
  );
}

const Title = ({ title, count }) => <h3 className={classNames({[styles.orange]: count})} style={{backgroundColor: 'yellow'}} >{ title }</h3>;

const TodoList = ({ todo, deleteTodo, completeTodo }) =>
  <ul>
    {
      todo.map((task, index) =>
        <li key={task.id} style={{ textDecoration: task.completed && 'line-through', color: task.completed && '#cccccc' }}>
          { task.title }
          <StyledButton onClick={() => completeTodo(task.id)}>done</StyledButton>
          <button onClick={() => deleteTodo(task.id)}>delete</button>
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
    addTodo: (...params) => dispatch(addTodoStart(...params)),
    completeTodo: (...params) => dispatch(completeTodo(...params)),
    deleteTodo: (...params) => dispatch(deleteTodo(...params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWithReduxSaga);
