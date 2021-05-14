import React, { Component } from "react";
import propTypes from "prop-types";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  static defaultProps = {
    onItemAdded: () => {},
  };

  static propTypes = {
    onItemAdded: propTypes.func,
  };
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        ></input>
      </form>
    );
  }
}
