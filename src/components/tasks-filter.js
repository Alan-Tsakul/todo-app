import React, { Component } from "react";

export default class TasksFilter extends Component {

  render() {
    const {
      onFilteredCompleted,
      onFilteredActive,
      allVisible
    } = this.props;

    
    return (
      <ul className="filters">
        <li>
          <button onClick={allVisible}>All</button>
        </li>
        <li>
          <button onClick={onFilteredActive}>Active</button>
        </li>
        <li>
          <button onClick={onFilteredCompleted}>Completed</button>
        </li>
      </ul>
    );
  }
}
