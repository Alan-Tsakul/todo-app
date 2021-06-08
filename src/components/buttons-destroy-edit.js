import React, {Component} from "react";

export default class ButtonsDestroyEdit extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          className="icon icon-edit"
          onClick={this.props.onToggleActive}
          aria-label="A"
        />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={this.props.onDeleted}
          aria-label="B"
        />
      </>
    );
  }
}
