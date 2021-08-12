import React from 'react';

export class TodoStateFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'To Do List',
      todos: [],
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleClick = () => {
    this.setState({
      todos: this.state.todos.concat([this.state.value]),
      value: '',
    });
  }

  render = () => {
    return (
      <>
        <h3>{this.state.title}</h3>
        <ul>
          {
            this.state.todos.map(todo => <li key={todo}>{todo}</li>)
          }
        </ul>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <button onClick={this.handleClick}>add</button>
      </>
    );
  }
}