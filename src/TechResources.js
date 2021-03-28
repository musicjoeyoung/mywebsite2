import React, { Component } from "react";
import RubberBand from "react-reveal/RubberBand";
import mediumlogo from "./img/mediumresource.png";
import youtubevideo from "./img/youtuberesource.png";

export class TechResources extends Component {
  render() {
    return (
      <RubberBand>
        <div className="techResources">
          <div className="resources">
            <a href="https://musicjoeyoung.medium.com/">
              <img src={mediumlogo} alt="" id="mediumlogo" />
            </a>
            <p id="medlogotext">Medium Article</p>
          </div>
          <div className="resources">
            {" "}
            <a href="https://youtu.be/d4uXeQ1WGKk">
              <img src={youtubevideo} alt="" id="mediumlogo" />
            </a>
            <p id="medlogotext">YouTube Tutorial</p>
          </div>
          <div className="resources"></div>
        </div>
      </RubberBand>
    );
  }
}

export default TechResources;
