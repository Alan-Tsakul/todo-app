import React from "react";
import propTypes from "prop-types";

import Task from "./task";

const TaskList = ({
  todos,
  onDeleted,
  onToggleCompleted,
  onToggleActive,
  addItem,
}) => {
  const elements = todos.map((item) => {
    return (
      <Task
        key={item.id}
        label={item.label}
        result={item.result}
        completed={item.completed}
        editing={item.editing}
        hidden={item.hidden}
        onDeleted={() => onDeleted(item.id)}
        onToggleActive={() => onToggleActive(item.id)}
        onToggleCompleted={() => onToggleCompleted(item.id)}
        onItemAdded={() => addItem(item.id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleCompleted: () => {},
  onToggleActive: () => {},
};

TaskList.propTypes = {
  todos: propTypes.object,
  addItem: propTypes.func,
  onToggleActive: propTypes.func,
  onToggleCompleted: propTypes.func,
  onItemAdded: propTypes.func.isRequired,
};

TaskList.propTypes = {
  todos: propTypes.shape({
    key: propTypes.number,
    label: propTypes.string,
    completed: propTypes.bool,
    editing: propTypes.bool,
    hidden: propTypes.bool,
  }),
};

export default TaskList;
