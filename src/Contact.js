import React, { Component } from "react";
import Email from "./img/Email.png";
import GitHub from "./img/GitHub.png";
import LinkedIn from "./img/LinkedIn.png";
import Medium from "./img/Medium.png";
import Twitter from "./img/Twitter.png";
import YouTube from "./img/YouTube.png";
import Zoom from "react-reveal/Zoom";

const open = (link) => {
  window.open(
    `${link}`
    //    "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
  );
};
export class Contact extends Component {
  render() {
    return (
      <Zoom>
        <div className="dropdown">
          <div className="Contact">
            <img
              src={Email}
              onClick={() => {
                open(
                  "mailto:musicjoeyoung@gmail.com?subject=Hi Joe!&body=Nice site!"
                );
              }}
              id="email"
              alt=""
            ></img>
            <img
              src={GitHub}
              onClick={() => {
                open("https://github.com/musicjoeyoung");
              }}
              id="github"
              alt=""
            ></img>
            <img
              src={LinkedIn}
              onClick={() => {
                open("https://www.linkedin.com/in/joseph-m-young/");
              }}
              id="linkedin"
              alt=""
            ></img>
            <img
              src={Medium}
              onClick={() => {
                open("https://musicjoeyoung.medium.com/");
              }}
              id="medium"
              alt=""
            ></img>
            <img
              src={Twitter}
              onClick={() => {
                open("https://twitter.com/musicjoeyoung");
              }}
              id="twitter"
              alt=""
            ></img>
            <img
              src={YouTube}
              onClick={() => {
                open(
                  "https://www.youtube.com/channel/UCXkqceLDXDpUu4RKk5evI1g"
                );
              }}
              id="youtube"
              alt=""
            ></img>
          </div>
        </div>
      </Zoom>
    );
  }
}

export default Contact;
