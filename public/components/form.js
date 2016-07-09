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
    this.setState({ taskName: event.target.value });
  }

  changeTaskDate(event) {
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
        <div className="name-display">{this.state.taskName}</div>
        <label htmlFor="task-date">Task date</label>
        <input
          type="date"
          onChange={(event) => this.changeTaskDate(event)}
          id="task-date"
          placeholder="Task Date"
        />
        <div className="date-display">{this.state.taskName}</div>{this.state.taskDate}
      </div>
    );
  }

}

Form.propTypes = {
  task: PropTypes.object,
};
