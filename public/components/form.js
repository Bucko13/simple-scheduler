import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      taskDate: '',
    };
  }

  changeTaskName(event) {
    console.log('name event:', event.target.value);
    this.setState({ taskName: event.target.value });
  }

  changeTaskDate(event) {
    console.log('date event:', event.target.value);
    this.setState({ taskDate: event.target.value });
  }


  render() {
    return (
      <div className="form">
        <label htmlFor="task-name">Task Name</label>
        <input
          onChange={(event) => this.changeTaskName(event)}
          id="task-name"
          placeholder="Task Name"
        />
        {this.state.taskName}
        <label htmlFor="task-date">Task date</label>
        <input
          type="date"
          onChange={(event) => this.changeTaskDate(event)}
          id="task-date"
          placeholder="Task Date"
        />
        {this.state.taskDate}
      </div>
    );
  }

}

Form.propTypes = {
  task: PropTypes.object,
};
