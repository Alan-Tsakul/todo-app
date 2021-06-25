import React, { useState } from "react";
import PropTypes from "prop-types";

const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  function onSubmit(evt) {
    evt.preventDefault();
    onItemAdded(label, minutes, seconds);
    setLabel("");
    setMinutes("");
    setSeconds("");
  }

  return (
    <form onSubmit={onSubmit} className="new-todo-form">
      <input
        type="text"
        className="new-todo"
        placeholder="Task"
        onChange={(evt) => setLabel(evt.target.value)}
        value={label}
        name="label"
      />
      <input type="submit" className="new-todo-submit" />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Min"
        onChange={(evt) => setMinutes(evt.target.value)}
        value={minutes}
        name="minutes"
      />
      <input type="submit" className="new-todo-submit" />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Sec"
        onChange={(evt) => setSeconds(evt.target.value)}
        value={seconds}
        name="seconds"
      />
      <input type="submit" className="new-todo-submit" />
    </form>
  );
};

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
};

export default NewTaskForm;
