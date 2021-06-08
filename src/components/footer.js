import React from "react";
import TasksFilter from "./tasks-filter";

const Footer = ({
  todoCount,
  onFilteredCompleted,
  onFilteredActive,
  allVisible,
  clearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter
        onFilteredCompleted={onFilteredCompleted}
        onFilteredActive={onFilteredActive}
        allVisible={allVisible}
      />
      <button
        type="button"
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
