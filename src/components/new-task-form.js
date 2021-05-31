/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
// import propTypes from "prop-types";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  // static defaultProps = {
  //   onItemAdded: () => {},
  // };

  // static propTypes = {
  //   onItemAdded: propTypes.func,
  // };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line react/prop-types
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
          onChange={this.onLabelChange}
          value={this.state.label}
         />
      </form>
    );
  }
}
