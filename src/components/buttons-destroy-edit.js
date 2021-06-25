import React from "react";
import PropTypes from "prop-types";

const ButtonsDestroyEdit = ({ onToggleActive, onDeleted }) => (
  <>
    <button
      type="button"
      className="icon icon-edit"
      onClick={onToggleActive}
      aria-label="A"
    />
    <button
      type="button"
      className="icon icon-destroy"
      onClick={onDeleted}
      aria-label="B"
    />
  </>
);

ButtonsDestroyEdit.propTypes = {
  onToggleActive: PropTypes.func,
  onDeleted: PropTypes.func,
};

ButtonsDestroyEdit.defaultProps = {
  onToggleActive: () => {},
  onDeleted: () => {},
};

export default ButtonsDestroyEdit;
