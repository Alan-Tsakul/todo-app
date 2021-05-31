
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";
import TasksFilter from "./tasks-filter";

const Footer = ({
  todoCount,
  onFilteredCompleted,
  // eslint-disable-next-line react/prop-types
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
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
