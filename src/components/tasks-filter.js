import React from "react";
import PropTypes from "prop-types";

const TasksFilter = ({ onFilteredCompleted, onFilteredActive, allVisible }) => (
  <ul className="filters">
    <li>
      <button type="button" onClick={allVisible}>
        All
      </button>
    </li>
    <li>
      <button type="button" onClick={onFilteredActive}>
        Active
      </button>
    </li>
    <li>
      <button type="button" onClick={onFilteredCompleted}>
        Completed
      </button>
    </li>
  </ul>
);

TasksFilter.propTypes = {
  onFilteredActive: PropTypes.func,
  onFilteredCompleted: PropTypes.func,
  allVisible: PropTypes.func,
};

TasksFilter.defaultProps = {
  onFilteredCompleted: () => {},
  onFilteredActive: () => {},
  allVisible: () => {},
};

export default TasksFilter;
