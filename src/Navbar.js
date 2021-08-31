import React from "react";
import resume from "./resume.pdf";
//import logo from "./img/logo.png";

export default function Navbar() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("links").style.top = "0";
    } else {
      document.getElementById("links").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div id="links">
      <a href="#spanDivAbout"> About</a>
      <a href="#spanDivSkills"> Skills</a>
      <a href="#spanDivProjects"> Projects</a>
      <a href="#spanContactForm"> Contact</a>
      <a href={resume}>Resume</a>
    </div>
  );
}
