import React, { Component } from "react";
import PianoModal from "./PianoModal";
import Piano from "./Piano";

export class About extends Component {
  modalProps = {
    triggerText: "Need a break?",
  };
  modalContent = (
    <React.Fragment>
      <Piano />
    </React.Fragment>
  );
  render() {
    return (
      <div>
        <div>
          <PianoModal
            modalProps={this.modalProps}
            modalContent={this.modalContent}
          />
        </div>
      </div>
    );
  }
}

export default About;
