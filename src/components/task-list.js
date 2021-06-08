import React from "react";
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

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleCompleted: () => {},
  onToggleActive: () => {},
};

export default TaskList;
