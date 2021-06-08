import React, { Component } from "react";

export default class TasksFilter extends Component {
  render() {
    const { onFilteredCompleted, onFilteredActive, allVisible } = this.props;

    return (
      <ul className="filters">
        <li>
          <button type="button" onClick={allVisible}>
            All
          </button>
        </li>
        <li>
          <button type="button" onClick={onFilteredActive}>
            Active
          </button>
        </li>
        <li>
          <button type="button" onClick={onFilteredCompleted}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
