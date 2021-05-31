// /* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class TasksFilter extends Component {
  render() {
    const { onFilteredCompleted, onFilteredActive, allVisible } = this.props;

    return (
      <ul className="filters">
        <li>
          <button type="button" onClick={allVisible}>All</button>
        </li>
        <li>
          <button type="button" onClick={onFilteredActive}>Active</button>
        </li>
        <li>
          <button type="button" onClick={onFilteredCompleted}>Completed</button>
        </li>
      </ul>
    );
  }
}
