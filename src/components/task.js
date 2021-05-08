import React, { Component } from "react";

export default class Task extends Component {
  state = {
    completed: false,
    editing: false,
    hidden: false,
  };

  onMarkCompleted = () => {
    this.setState((state) => {
      return {
        completed: !state.completed,
      };
    });
  };

  onMarkEdited = () => {
    this.setState({
      editing: true,
    });
  };

  onDeleted = () => {
    this.setState({
      hidden: true,
    });
  };

  render() {
    const { date } = this.props;
    const { completed } = this.state;
    const { editing } = this.state;
    const { hidden } = this.state;
    let label;

    let classNames = "";
    if (completed) {
      classNames += " completed";
    }

    if (editing) {
      classNames += " editing";
    }

    if (hidden) {
      classNames += " hidden";
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.onMarkCompleted}
          />
          <label>
            <span className="description">
              {!classNames
                ? (label = "Active task")
                : (label = "Completed task")}
            </span>
            <span className="created">{date}</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={this.onMarkEdited}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={this.onDeleted}
          ></button>
        </div>
        <input type="text" className="edit" placeholder="Editing task" />
      </li>
    );
  }
}
