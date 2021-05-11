import React, { Component } from "react";

import { formatDistanceToNow } from "date-fns";

let result = formatDistanceToNow(new Date());


export default class Task extends Component {

  render() {
    let { label, onDeleted, onToggleCompleted, onToggleActive, completed, editing, hidden} = this.props;
    
    let classNames = "";
    if(completed) {
      classNames += ' completed'
    }

    if(editing) {
      classNames += ' editing'
    }
    
    if(hidden) {
      classNames += ' hidden'
    }
    return (
      <li className={classNames} >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onToggleCompleted}
          />
          <label>
            <span className="description">
               {label}
            </span>
            <span className="created">{result}</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={onToggleActive}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={onDeleted}
          ></button>
        </div>
        <input type="text" className="edit" value="Editing task" onChange={onToggleActive}/>
      </li>
    );
  }
}
