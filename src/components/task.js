import React, { useState } from "react";
import PropTypes from "prop-types";
import Timer from "./timer";
import ButtonsDestroyEdit from "./buttons-destroy-edit";

const Task = ({
  result,
  onToggleCompleted,
  completed,
  editing,
  showing,
  onDeleted,
  onToggleActive,
  minutes,
  seconds,
  prevLabel,
}) => {
  const [label, updateLabel] = useState(prevLabel);

  function onSubmit(event) {
    onToggleActive();
    event.preventDefault();
    updateLabel(label);
  }

  let classNames = "";
  let checked = "";

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
            <Timer prevMinutes={minutes} prevSeconds={seconds} />
            <span className="description">{result}</span>
          </label>
          <ButtonsDestroyEdit
            onDeleted={onDeleted}
            onToggleActive={onToggleActive}
          />
        </div>
      ) : null}

      <form className="second-form " onSubmit={onSubmit}>
        <input
          type="text"
          className="edit"
          onChange={(evt) => updateLabel(evt.target.value)}
          value={label}
        />
      </form>
    </li>
  );
};

Task.propTypes = {
  result: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleCompleted: PropTypes.func,
  editing: PropTypes.bool.isRequired,
  showing: PropTypes.bool.isRequired,
  onDeleted: PropTypes.func,
  seconds: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  prevLabel: PropTypes.string.isRequired,
  onToggleActive: PropTypes.func,
};

Task.defaultProps = {
  onToggleCompleted: () => {},
  onToggleActive: () => {},
  onDeleted: () => {}
};

export default Task;
