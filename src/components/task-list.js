import React from "react";

import Task from "./task";

const TaskList = ({ todos, onDeleted, onToggleCompleted, onToggleActive, addItem }) => {
  const elements = todos.map((item) => {
    return (
      <Task
        key={item.id}
        label={item.label}
        completed={item.completed}
        editing={item.editing}
        onDeleted={() => onDeleted(item.id)}
        onToggleActive={() => onToggleActive(item.id)}
        onToggleCompleted={() => onToggleCompleted(item.id)}
        hidden={item.hidden}
        onItemAdded={() => addItem(item.id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
