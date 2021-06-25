import React from "react";
import PropTypes from "prop-types";
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
      prevLabel={item.label}
      result={item.result}
      completed={item.completed}
      editing={item.editing}
      showing={item.showing}
      minutes={item.minutes}
      seconds={item.seconds}
      onDeleted={() => onDeleted(item.id)}
      onToggleActive={() => onToggleActive(item.id)}
      onToggleCompleted={() => onToggleCompleted(item.id)}
      onItemAdded={() => addItem(item.id)}
    />
  ));

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  onToggleActive: PropTypes.func,
  addItem: PropTypes.func,
};

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleCompleted: () => {},
  onToggleActive: () => {},
  addItem: () => {},
};

export default TaskList;
