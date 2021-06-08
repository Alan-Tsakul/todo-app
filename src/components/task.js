import React, { Component } from "react";
import Timer from "../components/timer";
import ButtonsDestroyEdit from "./buttons-destroy-edit";
export default class Task extends Component {
  state = {
    label: this.props.label,
  };

  onItemChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    this.props.onToggleActive();
    event.preventDefault();
    this.setState({
      label: this.state.label,
    });
  };

  render() {
    const {
      result,
      onToggleCompleted,
      completed,
      editing,
      showing,
      onDeleted,
      onToggleActive,
      minutes,
      seconds,
    } = this.props;

    const { label } = this.state;

    let classNames = "",
      checked = "";

    if (completed) {
      classNames += " completed";
      checked += "checked";
    }

    if (editing) {
      classNames += " editing";
    }

    return (
      <li className={classNames}>
        {showing ? (
          <div className="view">
            <input
              className="toggle"
              checked={checked}
              type="checkbox"
              onClick={onToggleCompleted}
            />
            <label>
              <span className="title">{label}</span>
              <Timer minutes={minutes} seconds={seconds} />
              <span className="description">{result}</span>
            </label>
            <ButtonsDestroyEdit
              onDeleted={onDeleted}
              onToggleActive={onToggleActive}
            />
          </div>
        ) : null}

        <form className="second-form " onSubmit={this.onSubmit}>
          <input
            type="text"
            className="edit"
            onChange={this.onItemChange}
            value={label}
          />
        </form>
      </li>
    );
  }
}
