// /* eslint-disable jsx-a11y/control-has-associated-label */
// /* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
// /* eslint-disable prefer-const */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

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
        label: this.state.label
      });
  };
  

  render() {
    const {
      result,
      onDeleted,
      onToggleCompleted,
      onToggleActive,
      completed,
      editing,
      showing
    } = this.props;



    let classNames = "";
    if (completed) {
      classNames += " completed";
    }

    if (editing) {
      classNames += " editing";
    }
    
    return (
      
      <li className={classNames}>
              { showing
        ? <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={onToggleCompleted}
        />
        <label>
          <span className="description">{this.state.label}</span>
          <span className="created">{result}</span>
        </label>
        <button
          type="button"
          className="icon icon-edit"
          onClick={onToggleActive}
          aria-label="A"
        />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={onDeleted}
          aria-label="B"
        />
      </div>
      : null
      }
         <form className="second-form " onSubmit={this.onSubmit}>
         <input
          type="text"
          className="edit"
          onChange={this.onItemChange}
          value={this.state.label}
        />
      </form>
      </li>
    );
  }
}
