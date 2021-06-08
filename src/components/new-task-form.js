import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    label: "",
    minutes: "",
    seconds: "",
  };

  handleInputChange = (event) => {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onSubmit = (evt) => {
    const { label, minutes, seconds } = this.state;
    evt.preventDefault();
    this.props.onItemAdded(label, minutes, seconds);
    this.setState({
      label: "",
      minutes: "",
      seconds: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="new-todo-form">
        <input
          type="text"
          className="new-todo"
          placeholder="Task"
          onChange={(evt) => this.handleInputChange(evt)}
          value={this.state.label}
          name="label"
        />
        <input type="submit" className="new-todo-submit" />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          onChange={(evt) => this.handleInputChange(evt)}
          value={this.state.minutes}
          name="minutes"
        />
        <input type="submit" className="new-todo-submit" />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          onChange={(evt) => this.handleInputChange(evt)}
          value={this.state.seconds}
          name="seconds"
        />
        <input type="submit" className="new-todo-submit" />
      </form>
    );
  }
}
