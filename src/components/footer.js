import React from "react";
import PropTypes from "prop-types";
import TasksFilter from "./tasks-filter";

const Footer = ({
  todoCount,
  onFilteredCompleted,
  onFilteredActive,
  allVisible,
  clearCompleted,
}) => (
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

Footer.propTypes = {
  todoCount: PropTypes.number.isRequired,
  onFilteredCompleted: PropTypes.func,
  allVisible: PropTypes.func,
  clearCompleted: PropTypes.func,
  onFilteredActive: PropTypes.func,
};

Footer.defaultProps = {
  onFilteredCompleted: () => {},
  onFilteredActive: () => {},
  allVisible: () => {},
  clearCompleted: () => {},
};

export default Footer;
