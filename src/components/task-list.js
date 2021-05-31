/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
// import propTypes from "prop-types";

import Task from "./task";

const TaskList = ({
  todos,
  onDeleted,
  onToggleCompleted,
  onToggleActive,
  addItem,
}) => {
  const elements = todos.map((item) => (
      <Task
        key={item.id}
        label={item.label}
        result={item.result}
        completed={item.completed}
        editing={item.editing}
        showing={item.showing}
        onDeleted={() => onDeleted(item.id)}
        onToggleActive={() => onToggleActive(item.id)}
        onToggleCompleted={() => onToggleCompleted(item.id)}
        onItemAdded={() => addItem(item.id)}
      />
    ));

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleCompleted: () => {},
  onToggleActive: () => {},
};

// TaskList.propTypes = {
//   todos: propTypes.object,
//   addItem: propTypes.func,
//   onToggleActive: propTypes.func,
//   onToggleCompleted: propTypes.func,
//   onItemAdded: propTypes.func.isRequired,
// };

// TaskList.propTypes = {
//   todos: propTypes.shape({
//     key: propTypes.number,
//     label: propTypes.string,
//     completed: propTypes.bool,
//     editing: propTypes.bool,
//     hidden: propTypes.bool,
//   }),
// };

export default TaskList;
