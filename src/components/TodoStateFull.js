import React from 'react';

export class TodoStateFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'To Do List',
      todo: [],
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleClick = () => {
    this.setState({
      todo: this.state.todo.concat(this.state.value),
      value: '',
    });
  }

  render = () => {
    return (
      <>
        <h3>{this.state.title}</h3>
        <ul>
          {
            this.state.todo.map(task => <li key={task}>{task}</li>)
          }
        </ul>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <button onClick={this.handleClick}>add</button>
      </>
    );
  }
}
