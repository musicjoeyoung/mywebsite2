import React, { Component } from "react";
import graphicdesign from "./img/graphicdesign.png";
import analytics from "./img/analytics.png";
import teamwork from "./img/teamwork.png";
import Bounce from "react-reveal/Bounce";

export class Skills extends Component {
  render() {
    return (
      <div>
        <Bounce bottom>
          <div id="spanDivSkills">
            <span className="border" id="span2">
              SKILLS
            </span>
          </div>
        </Bounce>
        <Bounce bottom>
          <div className="flex-grid-thirds" id="flex-grid-thirds">
            <div className="col">
              <img src={graphicdesign} id="graphicdesign" alt="" />
              <h3>Designer</h3>
              <p>
                Adept at designing detailed layouts, incorporate clean patterns,
                and use appealing color palettes.
              </p>
              <p id="subheaders">
                <strong>Designing Specialties:</strong>
              </p>
              <p>UX, UI, Web, Apps</p>
              <p id="subheaders">
                <strong>Design Tools:</strong>
              </p>
              <p>
                Figma
                <br /> Excalidraw
                <br /> Coolors
                <br /> Sensual Logic PaintMaker{" "}
              </p>
            </div>
            <div className="col">
              <img src={analytics} id="analytics" alt="" />
              <h3>Fullstack Developer</h3>
              <p>
                Skilled at creating environments where information flows with
                ease and efficiency.
              </p>
              <p id="subheaders">
                <strong>Proficient:</strong>
              </p>
              <p>
                {" "}
                Javascript, HTML5, CSS3
                <br /> React, Node, Express
                <br /> PostgresQL, Git, REST-ful API’s
                <br /> Sequelize, Redux
              </p>
              <p id="subheaders">
                <strong>Competent:</strong>
              </p>
              <p>
                Tone.js, Three.js, Mocha
                <br /> Jasmine, SQL, Firebase/Firestore
                <br />
                Python
              </p>
              <p id="subheaders">
                <strong>Basic:</strong>
              </p>
              <p>Angular, Typescript, MongoDB, GraphQL, Stepzen</p>
            </div>
            <div className="col">
              <img src={teamwork} id="teamwork" alt="" />
              <h3>Leader & Team Player</h3>
              <p>
                A natural leader who enjoys collaboration and prioritizes
                quality of both products and relationships.
              </p>

              {/*     <p id="subheaders">
                <strong>Other Interests/Influences:</strong>
              </p>
              <p>Music, Art, Military Leadership</p> */}
              <p id="subheaders">
                <strong>Education:</strong>
              </p>
              <p>
                Fullstack Academy - Software Engineering
                <br />
                Bachelor of Arts - Music Education - Ball State University
                <br />
                Master of Arts - Music Composition - Hunter College
              </p>
              <p id="subheaders">
                <strong>Currrent Collaboration:</strong>
              </p>
              <p>
                •Building the official website for the 78th Army Band, Fort Dix,
                NJ. <br />
                •Working with a team of developers to create an employment app
                for freelance software engineers.
              </p>
            </div>
          </div>
        </Bounce>
      </div>
    );
  }
}

export default Skills;
