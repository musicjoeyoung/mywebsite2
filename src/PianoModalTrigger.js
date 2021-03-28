import React, { Component } from "react";
class PianoModalTrigger extends Component {
  render() {
    return (
      <button
        ref={this.props.buttonRef}
        onClick={this.props.showModal}
        className="modal-button"
        id="piano-modal-button"
      >
        {this.props.triggerText}
      </button>
    );
  }
}

export default PianoModalTrigger;
