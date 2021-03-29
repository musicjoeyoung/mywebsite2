import React, { Component } from "react";
import Modal from "./Modal";
import Bounce from "react-reveal/Bounce";

export class About extends Component {
  modalProps = {
    triggerText: "Full Bio",
  };
  modalContent = (
    <React.Fragment>
      <p id="modalText">
        I'm a software engineer, as well as a musician and a member of the US
        Army with over 16 years of leadership experience. As a software engineer
        and graduate of the Fullstack Academy Software Engineering Immersive
        program, I perform coding, debugging, testing, and troubleshooting in
        application development processes. I work primarily in Javascript with
        HTML5, CSS3, React, Redux, Node, Express, Sequelize, PostgreSQL, Babel,
        Webpack, OAuth, Heroku. I have also earned certifications from MIT on
        EdX.org in Data Science with Python.
      </p>
    </React.Fragment>
  ); //
  render() {
    return (
      <div id="aboutDiv">
        <Bounce bottom>
          <div id="div1">
            <h2 id="bioGreet">Hi, I'm Joe. </h2>
            <div id="bio">
              <p id="bioText">
                I'm a software engineer as well as a musician and a member of
                the US Army with over 16 years of leadership experience. I
                specialize in designing exceptional websites, building
                functional applications, and improving user experience.
              </p>
            </div>
            <Modal
              modalProps={this.modalProps}
              modalContent={this.modalContent}
            />
          </div>
        </Bounce>
      </div>
    );
  }
}

export default About;
