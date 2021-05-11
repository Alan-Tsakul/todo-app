import React from "react";
import TasksFilter from "./tasks-filter";

const Footer = ({
  todos,
  todoCount,
  onFilteredCompleted,
  onFilteredActive,
  allVisible,
  clearCompleted,
}) => {
  const elements = todos.map((item) => {
    return (
      <TasksFilter
        onFilteredCompleted={() => onFilteredCompleted(item.id)}
        onFilteredActive={() => onFilteredActive(item.id)}
        allVisible={() => allVisible(item.id)}
        clearCompleted={() => clearCompleted(item.id)}
      />
    );
  });
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter
        name={elements}
        onFilteredCompleted={onFilteredCompleted}
        onFilteredActive={onFilteredActive}
        allVisible={allVisible}
      />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
